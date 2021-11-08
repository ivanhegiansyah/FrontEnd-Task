import { useState, useRef } from "react";
import styles from "./FormPage.module.css";

function FormPage() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };
  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const suratKesungguhan = useRef("");
  const [data, setData] = useState(baseData);
  const [errorMsg, setErrorMsg] = useState(baseError);
  const [errorMsg2, setErrorMsg2] = useState(baseError);
  const [errorMsg3, setErrorMsg3] = useState(baseError);
  const regex = /^[A-Za-z ]*$/;
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "nama") {
      if (regex.test(value)) {
        setErrorMsg("");
      } else {
        setErrorMsg({ nama: "Nama Lengkap Harus Berupa Huruf" });
      }
    }

    if (name === "email") {
      if (regexEmail.test(value)) {
        setErrorMsg2("");
      } else {
        setErrorMsg2({ email: "Email Tidak Sesuai" });
      }
    }

    if (name === "noHandphone") {
      if (value.length >= 9 && value.length <= 14) {
        setErrorMsg3("");
      } else {
        setErrorMsg3({ noHandphone: "No Handphone Tidak Sesuai" });
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const resetData = () => {
    setData(baseData);
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    if (errorMsg !== "") {
      alert("Data Pendaftar Tidak Sesuai");
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`);
    }
    resetData();
    e.preventDefault();
  };

  return (
    <>
      <h1 style={{ "text-align": "center" }}>
        Pendaftaran Peserta Coding Bootcamp
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Lengkap:
          <input
            type="text"
            name="nama"
            className={styles.input}
            value={data.nama}
            onChange={handleInput}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            className={styles.input}
            value={data.email}
            onChange={handleInput}
            required
          />
        </label>
        <label>
          No Handphone:
          <input
            type="text"
            name="noHandphone"
            className={styles.input}
            value={data.noHandphone}
            onChange={handleInput}
            required
          />
        </label>
        <label style={{ margin: "unset" }}>
          Latar Belakang Pendidikan:
          <div>
            <input
              type="radio"
              name="pendidikan"
              value={data.pendidikan}
              onChange={handleInput}
            />
            <label style={{ padding: "unset" }}>IT</label>
            <input
              type="radio"
              name="pendidikan"
              value={data.pendidikan}
              onChange={handleInput}
            />
            <label style={{ padding: "unset" }}>Non IT</label>
          </div>
        </label>
        <label>
          Kelas Coding yang Dipilih:
          <select
            type="text"
            name="kelas"
            className={styles.input}
            value={data.kelas}
            onChange={handleInput}
          >
            <option value="" selected disabled hidden>
              Pilih Salah Satu Program
            </option>
            <option>Coding BackEnd with Golang</option>
            <option>Coding FrontEnd with ReactJS</option>
            <option>Fullstack Developer</option>
          </select>
        </label>
        <label>
          Foto Surat Kesungguhan:
          <input type="file" className={styles.input} refs={suratKesungguhan} />
        </label>
        <label>
          Harapan Untuk Coding Bootcamp ini:
          <textarea
            name="harapan"
            cols="30"
            rows="6"
            className={styles.input}
            value={data.harapan}
            onChange={handleInput}
          ></textarea>
        </label>
        <p className={styles.errorMessage}>{errorMsg.nama}</p>
        <p className={styles.errorMessage}>{errorMsg2.email}</p>
        <p className={styles.errorMessage}>{errorMsg3.noHandphone}</p>
        <div>
          <input
            type="submit"
            className="btn btn-success"
            style={{ marginRight: "8px" }}
            value="Submit"
          />

          <button className="btn btn-danger" onClick={resetData}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

export default FormPage;
