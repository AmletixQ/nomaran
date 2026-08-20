export default function ContactsPage() {
  return (
    <main className="mx-auto min-h-screen w-[95%] pt-[calc(var(--header-height)/3)] font-helvetica lg:px-12">
      <h1 className="text-xl lg:text-4xl font-bold">Контакты</h1>
      <div className="flex flex-wrap items-center gap-1">
        <p>Телефон:</p>
        <a href="tel:+79194239100">+7 (919) 423-91-00</a>
      </div>
    </main>
  );
}
