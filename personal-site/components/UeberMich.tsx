import React from "react";
import Image from "next/image";
import kevin from "../public/Kevin.jpg";
import { motion } from "framer-motion";

function UeberMich() {
  return (
    <motion.div
      className="flex flex-1 gap-10 flex-col md:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-2xl text-left leading-relaxed">
        <p>
          Mein Name ist Kevin und ich bin 22 Jahre alt. Derzeit arbeite ich als
          Webentwickler bei der SelectLine Software GmbH. Durch meine Arbeit bin
          ich vertraut mit HTML, CSS, JS (jQuery), PHP und Wordpress.
        </p>
        <p>
          Meine Ausbildung hab ich 2018 als Fachinformatiker für
          Anwendungsentwicklung ebenfalls bei SelectLine begonnen. So konnte ich
          mir Wissen in den Programmiersprachen Delphi und C# aneignen. Während
          meiner Ausbildung hab ich auch das Webteam kennengelernt, wodurch
          meine Leidenschaft für das Web entfacht wurde. Allerdings habe ich
          Mitte 2021 angefangen im Rechnungswesenteam zu arbeiten und dort C#
          eingesetzt. 2022 wurde mir dann der Wunsch erfüllt ins Webteam gehen
          zu dürfen. Dort lernte ich neben den Standard-Websprachen auch Docker
          kennen.
        </p>
        <p>
          Hobbymäßig spiele ich Basketball, Gitarre und gehe, sofern meine
          Motivation stimmt, ins Fitnessstudio.
        </p>
      </div>
      <Image
        src={kevin}
        alt={"Auf dem Bild bin ich, Kevin Schüler, zu sehen"}
        height={500}
        className="md:h-96 md:my-auto mx-auto"
      />
    </motion.div>
  );
}

export default UeberMich;
