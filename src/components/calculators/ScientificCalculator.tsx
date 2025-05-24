import React, { useState, useCallback } from 'react';

const ScientificCalculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);
  const [memory, setMemory] = useState<number>(0);

  const inputNumber = useCallback((num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  }, [display, waitingForOperand]);

  const inputDot = useCallback(() => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  }, [display, waitingForOperand]);

  const clear = useCallback(() => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  }, []);

  const performOperation = useCallback((nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  }, [display, previousValue, operation]);

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performFunction = useCallback((func: string) => {
    const inputValue = parseFloat(display);
    let result: number;

    switch (func) {
      case 'sin':
        result = Math.sin(inputValue * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(inputValue * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(inputValue * Math.PI / 180);
        break;
      case 'log':
        result = Math.log10(inputValue);
        break;
      case 'ln':
        result = Math.log(inputValue);
        break;
      case 'sqrt':
        result = Math.sqrt(inputValue);
        break;
      case 'x²':
        result = Math.pow(inputValue, 2);
        break;
      case 'x³':
        result = Math.pow(inputValue, 3);
        break;
      case '1/x':
        result = 1 / inputValue;
        break;
      case '±':
        result = -inputValue;
        break;
      case '%':
        result = inputValue / 100;
        break;
      default:
        result = inputValue;
    }

    setDisplay(String(result));
    setWaitingForOperand(true);
  }, [display]);

  const Button: React.FC<{ 
    onClick: () => void; 
    className?: string; 
    children: React.ReactNode; 
  }> = ({ onClick, className = '', children }) => (
    <button
      onClick={onClick}
      className={`p-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="p-8 relative" style={{ backgroundColor: 'black' }}>
      <div 
        className="absolute top-0 right-0 w-80 h-80 opacity-20 rounded-full" 
        style={{ 
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(80, 40, 120, 0.1) 70%, transparent 100%)',
          filter: 'blur(40px)',
          transform: 'translate(20%, -30%)',
          zIndex: 0
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center pb-2 relative inline-block w-full">
          Scientific Calculator
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
        </h2>
        
        {/* Display */}
        <div className="mb-6 p-6 bg-gray-900 bg-opacity-70 border border-gray-800 rounded-lg">
          <div className="text-right text-3xl font-mono text-white overflow-hidden">
            {display}
          </div>
        </div>

        {/* Memory Controls */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <Button
            onClick={() => setMemory(memory + parseFloat(display))}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            M+
          </Button>
          <Button
            onClick={() => setMemory(memory - parseFloat(display))}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            M-
          </Button>
          <Button
            onClick={() => {
              setDisplay(String(memory));
              setWaitingForOperand(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            MR
          </Button>
          <Button
            onClick={() => setMemory(0)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            MC
          </Button>
        </div>

        {/* Scientific Functions */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          <Button
            onClick={() => performFunction('sin')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            sin
          </Button>
          <Button
            onClick={() => performFunction('cos')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            cos
          </Button>
          <Button
            onClick={() => performFunction('tan')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            tan
          </Button>
          <Button
            onClick={() => performFunction('log')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            log
          </Button>
          <Button
            onClick={() => performFunction('ln')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            ln
          </Button>
        </div>

        <div className="grid grid-cols-5 gap-2 mb-4">
          <Button
            onClick={() => performFunction('x²')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            x²
          </Button>
          <Button
            onClick={() => performFunction('x³')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            x³
          </Button>
          <Button
            onClick={() => performFunction('sqrt')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            √x
          </Button>
          <Button
            onClick={() => performFunction('1/x')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            1/x
          </Button>
          <Button
            onClick={() => performFunction('%')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            %
          </Button>
        </div>

        {/* Basic Calculator */}
        <div className="grid grid-cols-4 gap-2">
          <Button
            onClick={clear}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            AC
          </Button>
          <Button
            onClick={() => performFunction('±')}
            className="bg-gray-600 hover:bg-gray-700 text-white"
          >
            ±
          </Button>
          <Button
            onClick={() => setDisplay(display.slice(0, -1) || '0')}
            className="bg-gray-600 hover:bg-gray-700 text-white"
          >
            ⌫
          </Button>
          <Button
            onClick={() => performOperation('÷')}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            ÷
          </Button>

          <Button
            onClick={() => inputNumber('7')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            7
          </Button>
          <Button
            onClick={() => inputNumber('8')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            8
          </Button>
          <Button
            onClick={() => inputNumber('9')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            9
          </Button>
          <Button
            onClick={() => performOperation('×')}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            ×
          </Button>

          <Button
            onClick={() => inputNumber('4')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            4
          </Button>
          <Button
            onClick={() => inputNumber('5')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            5
          </Button>
          <Button
            onClick={() => inputNumber('6')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            6
          </Button>
          <Button
            onClick={() => performOperation('-')}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            -
          </Button>

          <Button
            onClick={() => inputNumber('1')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            1
          </Button>
          <Button
            onClick={() => inputNumber('2')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            2
          </Button>
          <Button
            onClick={() => inputNumber('3')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            3
          </Button>
          <Button
            onClick={() => performOperation('+')}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            +
          </Button>

          <Button
            onClick={() => inputNumber('0')}
            className="bg-gray-700 hover:bg-gray-600 text-white col-span-2"
          >
            0
          </Button>
          <Button
            onClick={inputDot}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            .
          </Button>
          <Button
            onClick={() => performOperation('=')}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            =
          </Button>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-medium text-purple-200 mb-2">Features</h3>
          <div className="text-sm text-gray-300 space-y-1">
            <div>• Basic arithmetic operations (+, -, ×, ÷)</div>
            <div>• Trigonometric functions (sin, cos, tan)</div>
            <div>• Logarithmic functions (log, ln)</div>
            <div>• Power functions (x², x³, √x)</div>
            <div>• Memory operations (M+, M-, MR, MC)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificCalculator; 