import { useShop } from '../contexts/ShopContext.jsx';

function Toast() {
  const { toast } = useShop();

  if (!toast) {
    return null;
  }

  return (
    <div className="toast" role="status" aria-live="polite">
      {toast.message}
    </div>
  );
}

export default Toast;
