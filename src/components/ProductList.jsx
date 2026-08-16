// Lemmi replace ProducList with expenses.jsx from expense beverage router.


// Fixed: IDs must be completely unique so React doesn't glitch!
const exp = [
  { id: "exp-001", category: "Mammal Care", amount: 1234 },
  { id: "exp-002", category: "Reptile Habitats", amount: 1234567 },
  { id: "exp-003", category: "Pisces Setup", amount: 100878 },
];

function ExpensesList() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-md">
      <div className="border-b border-slate-200 pb-3 mb-4">
        <h1 className="font-bold text-2xl text-slate-900 tracking-tight">
          All My Expenses
        </h1>
        <p className="text-sm text-slate-300 mt-1">
          A historical view of your logged expenditures.
        </p>
      </div>

      {/* Grid wrapper for cards */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {exp.map((item) => (
          <li
            key={item.id}
            className="flex flex-col justify-between p-5 bg-slate-50 border border-slate-100 rounded-xl hover:border-sky-300 hover:shadow-md transition-all duration-200 group"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-sky-600 transition-colors">
              {item.category}
            </span>
            <span className="text-2xl font-black text-slate-800 mt-2">
              ${item.amount.toLocaleString()}{" "}
              {/* Adds neat commas to large numbers */}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;


