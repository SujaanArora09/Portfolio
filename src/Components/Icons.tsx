import { MotionValue, useSpring, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

function IconContainer({
  mouseX,
  title,
  icon,
  component,
  toggleWindow,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  component: React.FC<{ closeWindow: () => void }>;
  toggleWindow: (component: React.FC<{ closeWindow: () => void }>) => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 1, 100], [45, 60, 45]);
  let heightTransform = useTransform(distance, [-150, 1, 100], [30, 70, 30]);

  let widthTransformIcon = useTransform(distance, [-150, 1, 100], [70, 80, 70]);
  let heightTransformIcon = useTransform(distance, [-150, 1, 100], [60, 70, 60]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => toggleWindow(component)}
      className="aspect-square flex items-center justify-center relative mx-2"
    >
      <motion.div ref={ref} style={{ width, height }}>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="rounded-md dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </button>
  );
}
