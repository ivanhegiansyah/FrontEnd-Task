import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormCoding from "./FormCoding";

describe("FormPage", () => {
  test("renders Form component", () => {
    render(<FormCoding />);
    expect(screen.getByText(/Nama Lengkap/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByText(/No Handphone/)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Latar Belakang Pendidikan/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Kelas Coding yang Dipilih/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Foto Surat Kesungguhan/)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)
    ).toBeInTheDocument();
  });

  test("input text for name, email, phone number with false value", () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Ivan01" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "Ivan Hegiansyah" },
    });

    fireEvent.input(screen.getByTestId("test-noHp", { name: /noHandphone/i }), {
      target: { value: 123 },
    });

    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue("Ivan01");
    expect(screen.getByLabelText(/Email/)).toHaveValue("Ivan Hegiansyah");
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123);
  });

  test("input text for ideal value", () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Ivan" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "ivan@mail.com" },
    });

    fireEvent.input(screen.getByTestId("test-noHp", { name: /noHandphone/i }), {
      target: { value: 123456789 },
    });

    expect(screen.getByLabelText(/Nama/)).toHaveValue("Ivan");
    expect(screen.getByLabelText(/Email/)).toHaveValue("ivan@mail.com");
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123456789);
  });

  test("submit button with error", () => {
    render(<FormCoding />);

    jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "ivan" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "emailmail.com" },
    });

    fireEvent.input(screen.getByTestId("test-noHp", { name: /noHandphone/i }), {
      target: { value: 123456789 },
    });

    expect(screen.getByLabelText(/Nama/)).toHaveValue("ivan");
    expect(screen.getByLabelText(/Email/)).toHaveValue("emailmail.com");
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123456789);

    fireEvent.submit(screen.getByText("Submit"));

    expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
  });

  test("submit button with ideal value", () => {
    render(<FormCoding />);

    jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Ivan" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "ivan@mail.com" },
    });

    fireEvent.input(screen.getByTestId("test-noHp", { name: /noHandphone/i }), {
      target: { value: 123456789 },
    });

    expect(screen.getByLabelText(/Nama/)).toHaveValue("Ivan");
    expect(screen.getByLabelText(/Email/)).toHaveValue("ivan@mail.com");
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123456789);

    fireEvent.submit(screen.getByText("Submit"));
    expect(window.alert).toBeCalledWith(
      `Data Pendaftar "Ivan" Berhasil Diterima`
    );
  });
});
