import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  collection,
  query,
  orderBy,
  getDocs,
} from 'firebase/firestore';
import { firestore } from '../../db';
import { Sura } from '../../types/surasTypes';

type SurasArray = Array<Sura>

export const surasApi = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Suras'],
  endpoints: (builder) => ({
    getSuras: builder.query<SurasArray, void>({
      async queryFn() {
        try {
          const ref = query(collection(firestore, 'sura'), orderBy('traditionalOrder'));
          const querySnapshot = await getDocs(ref);
          let surasList: SurasArray = [];
          querySnapshot?.forEach((doc) => {
            surasList.push({ id: doc.id, ...doc.data() } as Sura);
          });
          return { data: surasList };
        } catch (error: any) {
          console.error(error.message);
          return { error: error.message };
        }
      },
      providesTags: ['Suras'],
    }),
    // setNewHighScore: builder.mutation({
    //   async queryFn({ scoresTableId, newHighScore }) {
    //     try {
    //       await updateDoc(doc(firestore, 'scoresTables', scoresTableId), {
    //         scores: arrayUnion(newHighScore),
    //       });
    //       return { data: null };
    //     } catch (error: any) {
    //       console.error(error.message);
    //       return { error: error.message };
    //     }
    //   },
    //   invalidatesTags: ['Score'],
    // }),
  }),
});

export const {
  useGetSurasQuery
} = surasApi;