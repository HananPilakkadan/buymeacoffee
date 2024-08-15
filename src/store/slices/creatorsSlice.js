import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  creators: [],
  isLoading: false,
  error: null,
  maleCount: 0,
  femaleCount: 0,
  avtiveMales: 0,
  activeFemales: 0,
};

export const fetchCreators = createAsyncThunk(
  "creator/fetchCreators",
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch(params);
      if (!response.ok) {
        throw new Error("Failed to fetch creators");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const loadMoreCreators = createAsyncThunk(
  "creator/loadMoreCreators",
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${params?.api}?page=${params?.page}&per_page=${params?.per_page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch creators");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const creatorSlice = createSlice({
  name: "creator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreators.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCreators.fulfilled, (state, action) => {
        state.isLoading = false;
        state.creators = action.payload;
        state.maleCount = state.creators?.filter(
          (creator) => creator?.gender === "male"
        )?.length;
        state.femaleCount = state.creators?.filter(
          (creator) => creator?.gender === "female"
        )?.length;

        state.avtiveMales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "male"
        )?.length;
        state.activeFemales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "female"
        )?.length;
      })
      .addCase(fetchCreators.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loadMoreCreators.pending, (state) => {
        state.isPaginationLoading = true;
        state.error = null;
      })
      .addCase(loadMoreCreators.fulfilled, (state, action) => {
        state.isPaginationLoading = false;
        state.creators = [...state.creators, ...action.payload];

        state.maleCount = state.creators?.filter(
          (creator) => creator?.gender === "male"
        )?.length;
        state.femaleCount = state.creators?.filter(
          (creator) => creator?.gender === "female"
        )?.length;
        state.avtiveMales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "male"
        )?.length;
        state.activeFemales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "female"
        )?.length;
      })
      .addCase(loadMoreCreators.rejected, (state, action) => {
        state.isPaginationLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = creatorSlice.actions;
export default creatorSlice.reducer;
