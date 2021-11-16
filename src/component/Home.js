import { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_PENGUNJUNG = gql`
  query MyQuery($id: Int_comparison_exp = {}) {
    pengunjung(where: { id: $id }) {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

const ADD_PENGUNJUNG = gql`
  mutation MyMutation($nama: String!, $umur: Int!, $jenisKelamin: String!) {
    insert_pengunjung_one(
      object: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin }
    ) {
      id
    }
  }
`;

const DELETE_PENGUNJUNG = gql`
  mutation MyMutation($id: Int!) {
    delete_pengunjung_by_pk(id: $id) {
      id
    }
  }
`;

const UPDATE_PENGUNJUNG = gql`
  mutation MyMutation(
    $nama: String
    $umur: Int
    $jenisKelamin: String
    $id: Int!
  ) {
    update_pengunjung_by_pk(
      pk_columns: { id: $id }
      _set: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin }
    ) {
      id
    }
  }
`;

function Home(props) {
  const { data, loading, error, refetch } = useQuery(GET_PENGUNJUNG);

  const [addPengunjung, { loading: addLoading }] = useMutation(ADD_PENGUNJUNG, {
    refetchQueries: [GET_PENGUNJUNG],
  });

  const [deletePengunjung, { loading: deleteLoading }] = useMutation(
    DELETE_PENGUNJUNG,
    {
      refetchQueries: [GET_PENGUNJUNG],
    }
  );

  const [updatePengunjung, { loading: updateLoading }] = useMutation(
    UPDATE_PENGUNJUNG,
    {
      refetchQueries: [GET_PENGUNJUNG],
    }
  );

  const [userId, setUserId] = useState("");

  if (loading || addLoading || deleteLoading || updateLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    console.log(error.message);
    return null;
  }

  const onChangeUserId = (e) => {
    if (e.target) {
      setUserId(e.target.value);
    }
  };

  const hapusPengunjung = (idx) => {
    deletePengunjung({
      variables: {
        id: idx,
      },
    });
  };

  const editPengunjung = (idx, nm, umr, jk) => {
    // data?.todos.find((v) => v.id === idx);
    updatePengunjung({
      variables: {
        id: idx,
        nama: nm,
        umur: umr,
        jenisKelamin: jk,
      },
    });
  };

  return (
    <div>
      <div>
        <Header />
        <input value={userId} onChange={onChangeUserId} />
        <button
          onClick={
            userId === ""
              ? () => refetch({ id: {} })
              : () => refetch({ id: { _eq: userId } })
          }
        >
          Get Data
        </button>
        <br></br>
        <br></br>
        <ListPassenger
          data={data}
          hapusPengunjung={hapusPengunjung}
          editPengunjung={editPengunjung}
        />
        <PassengerInput addPengunjung={addPengunjung} />
      </div>
    </div>
  );
}

export default Home;
