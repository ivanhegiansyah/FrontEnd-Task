import "./Home.css";
import PassangerEdit from "./PassangerEdit";
const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;
  return (
    <tr>
      <td onClick={() => {}}>{id}</td>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jenisKelamin}</td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
      <td className="removeBorder">
        <PassangerEdit id={id} editPengunjung={props.editPengunjung} />
      </td>
    </tr>
  );
};

export default ListItem;
