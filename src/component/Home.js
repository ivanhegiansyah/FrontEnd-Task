import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

const GET_PENGUNJUNG = gql`
  query MyQuery {
    pengunjung {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

const GET_PENGUNJUNG_BY_ID = gql`
  query MyQuery($id: Int!) {
    pengunjung(where: { id: { _eq: $id } }) {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

function Home(props) {
  //   const { data, loading, error } = useQuery(GET_PENGUNJUNG);
  const [getPengunjung, { data, error, loading }] =
    useLazyQuery(GET_PENGUNJUNG_BY_ID);

  const [userId, setUserId] = useState(0);
  const [list, setList] = useState([]);

  const [passanger, setPassanger] = useState([
    {
      id: uuidv4(),
      nama: "Yoga",
      umur: 22,
      jenisKelamin: "Pria",
    },
    {
      id: uuidv4(),
      nama: "Ria",
      umur: 19,
      jenisKelamin: "Wanita",
    },
    {
      id: uuidv4(),
      nama: "Fahmi",
      umur: 25,
      jenisKelamin: "Pria",
    },
    {
      id: uuidv4(),
      nama: "Lala",
      umur: 21,
      jenisKelamin: "Wanita",
    },
    {
      id: uuidv4(),
      nama: "Ivan",
      umur: 25,
      jenisKelamin: "Pria",
    },
  ]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    console.log(error.message);
    return null;
  }

  const onGetData = () => {
    getPengunjung({ variables: { id: userId } });
    setList(data?.pengunjung);
  };

  const onChangeUserId = (e) => {
    if (e.target) {
      setUserId(e.target.value);
    }
  };

  const hapusPengunjung = (id) => {
    const newData = [...passanger].filter((item) => item.id !== id);
    setPassanger(newData);
  };

  const tambahPengunjung = (newUser) => {
    const newData = [newUser, ...passanger];

    setPassanger(newData);
  };

  return (
    <div>
      <div>
        <Header />
        <input value={userId} onChange={onChangeUserId} />
        <button onClick={onGetData}>Get Data</button>
        <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
        <PassengerInput tambahPengunjung={tambahPengunjung} />
      </div>
    </div>
  );
}

export default Home;
