"use client";

export default function MenuModal({ openModal, setOpenModal }) {
  return <div>{openModal && <div>Modal</div>}</div>;
}
