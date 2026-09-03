"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix from string like "1,000+" or "100%" or "7 Days"
  const numericPart = value.replace(/[^\d.]/g, '');
  const targetNumber = parseFloat(numericPart);
  
  const hasComma = value.includes(',');
  const suffix = value.substring(value.indexOf(numericPart) + numericPart.length);
  const prefix = value.substring(0, value.indexOf(numericPart));
  
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView && !isNaN(targetNumber)) {
      const controls = animate(0, targetNumber, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          let numStr = Math.floor(v).toString();
          if (hasComma) {
            numStr = Math.floor(v).toLocaleString();
          }
          setDisplayValue(numStr);
        }
      });
      return controls.stop;
    }
  }, [isInView, targetNumber, hasComma]);

  if (isNaN(targetNumber)) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
