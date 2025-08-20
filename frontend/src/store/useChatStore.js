import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Error fetching messages");
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      // --- add timestamp for latency measurement ---
      const sentAt = Date.now();

      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        { ...messageData, sentAt } // keep REST intact, just add timestamp
      );

      // update state immediately
      set({ messages: [...messages, res.data] });

      // --- also send through socket for realtime delivery ---
      const socket = useAuthStore.getState().socket;
      socket.emit("sendMessage", { ...res.data, sentAt });

      // measure REST round-trip (optional, just for logging)
      const receivedAt = Date.now();
      console.log(`REST round-trip latency: ${receivedAt - sentAt} ms`);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error sending message");
    }
  },

  subscribeToMessages: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    const socket = useAuthStore.getState().socket;

    socket.on("newMessage", (newMessage) => {
      // --- measure realtime latency ---
      if (newMessage.sentAt) {
        const receivedAt = Date.now();
        const latency = receivedAt - newMessage.sentAt;
        console.log(`Realtime delivery latency: ${latency} ms`);
      }

      // only push messages from the currently selected chat user
      const isMessageSentFromSelectedUser =
        newMessage.senderId === selectedUser._id;
      if (!isMessageSentFromSelectedUser) return;

      set({
        messages: [...get().messages, newMessage],
      });
    });
  },

  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
