import { cn } from "@/utils/cn";
import { Inter } from "next/font/google";

const inter = Inter({ variable: "--font-inter" });

export default function ActivityPage() {
  return (
    <main
      className={cn(
        "flex flex-col gap-10 pt-25 md:pt-40 2xl:mx-25 2xl:py-70",
        inter.className,
      )}
    >
      <h2 className="text-center">Деятельность организации</h2>
      <div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">
            Целью создания и деятельности Организации является:
          </p>
          <ul className="flex w-8/12 list-inside list-disc flex-col gap-2">
            <li>
              Содействие полной и гласной гласной реабилитации жертв
              политических репрессий, восстановлению их доброго имени;
            </li>
            <li>
              Содействие сохранению и увековечению памяти о жертвах политических
              репрессий;
            </li>
            <li>
              Содействие развитию гражданского и правового сознания сограждан.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">
            Организация в установленном законом порядке осуществляет
            осуществляет следующие виды деятельности:
          </p>
          <ul className="flex w-8/12 list-inside list-disc flex-col gap-2">
            <li>
              Оказание материальной, правовой помощи и иной поддержки
              нуждающимся членам Организации;
            </li>
            <li>
              Содействие реабилитации, возмещению морального вреда и
              материального ущерба, причиненного жертвам политических репрессий;
            </li>
            <li>
              Участие в установлении мест массового захоронения жертв произвола,
              сооружении памятников жертвам политических репрессий, формировании
              и издании региональных книг памяти жертв политических репрессий.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
