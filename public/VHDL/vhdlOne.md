<span style="background-color:dimgray">(1) Describe the electronic circuit ports by a VHDL program.</span>

<div style="display:flex; justify-content:center"> <img src="https://imgur.com/5dO1lKZ.png" /> </div>

(a) Use the data type `std_logic_vector` to describe the ports in entity part.

```VHDL
library IEEE;
use IEEE.std_logic_1164.all;

entity electronic_circuit is
 port( a: in std_logic_vector(7 downto 0);
    b: in std_logic_vector(5 downto 0);
    c: in std_logic_vector(3 downto 0);
    d: out std_logic_vector(7 downto 0);
    e: inout std_logic_vector(11 downto 0);
    f: out std_logic_vector(2 downto 0));
end;
```

(b) Use the data type `bit_vector` to describe the ports in entity part.

```VHDL
entity electronic_circuit is
 port( a: in bit_vector(7 downto 0);
    b: in bit_vector(5 downto 0);
    c: in bit_vector(3 downto 0);
    d: out bit_vector(7 downto 0);
    e: inout bit_vector(11 downto 0);
    f: out bit_vector(2 downto 0));
end;
```

(c) Use the data type `integer` to describe the ports in entity part.

```VHDL
entity electronic_circuit is
 port( a: in integer range 1 to 255;       -- 8 bits: 1 to 255
    b: in integer range 1 to 63;        -- 6 bits: 1 to 63
    c: in integer range 1 to 15;        -- 4 bits: 1 to 15
    d: out integer range 1 to 255;      -- 8 bits: 1 to 255
    e: inout integer range 1 to 4095;   -- 12 bits: 1 to 4095
    f: out integer range 1 to 7);       -- 3 bits: 1 to 7
end;
```

(d) Use the data type `natural` to describe the ports in entity part.

```VHDL
entity electronic_circuit is
 port( a: in natural range 0 to 255;       -- 8 bits: 0 to 255
    b: in natural range 0 to 63;        -- 6 bits: 0 to 63
    c: in natural range 0 to 15;        -- 4 bits: 0 to 15
    d: out natural range 0 to 255;      -- 8 bits: 0 to 255
    e: inout natural range 0 to 4095;   -- 12 bits: 0 to 4095
    f: out natural range 0 to 7);       -- 3 bits: 0 to 7
end;
```

(e) Use the data type `positive` to describe the ports in entity part.

```VHDL
entity electronic_circuit is
 port( a: in positive range 1 to 255;      -- 8 bits: 1 to 255
    b: in positive range 1 to 63;       -- 6 bits: 1 to 63
    c: in positive range 1 to 15;       -- 4 bits: 1 to 15
    d: out positive range 1 to 255;     -- 8 bits: 1 to 255
    e: inout positive range 1 to 4095;  -- 12 bits: 1 to 4095
    f: out positive range 1 to 7);      -- 3 bits: 1 to 7
end;
```

(f) Use the data type `unsigned` to describe the ports in entity part.

```VHDL
library IEEE;
use IEEE.numeric_std.all;

entity electronic_circuit is
 port( a: in unsigned(7 downto 0);
    b: in unsigned(5 downto 0);
    c: in unsigned(3 downto 0);
    d: out unsigned(7 downto 0);
    e: inout unsigned(11 downto 0);
    f: out unsigned(2 downto 0));
end;
```

(g) Use the data type `signed` to describe the ports in entity part.

```VHDL
library IEEE;
use IEEE.numeric_std.all;

entity electronic_circuit is
 port( a: in signed(7 downto 0);
    b: in signed(5 downto 0);
    c: in signed(3 downto 0);
    d: out signed(7 downto 0);
    e: inout signed(11 downto 0);
    f: out signed(2 downto 0));
end;
```

<span style="background-color:dimgray">(2) Implement this Boolean function in VHDL.</span>
$$f=ab'+bc'$$

```VHDL
entity boolean is
 port( a: in bit;
    b: in bit;
    c: in bit;
    f: out bit);
end;

architecture b_arc of boolean is
 begin
  f <= (a and not b) or (b and not c);
end;
```

<span style="background-color:dimgray">(3) Define a signal object with data type integer, and the initial value of the object is 2342.</span>

```VHDL
signal my_integer: integer := 2342;
```

<span style="background-color: dimgray">(4) Consider the signal object “<code>signal my_obj: integer;</code>”. How many bits are used for this signal object?</span>
32 bits.

<span style="background-color:dimgray">(5) State the differences between a signal object and variable object.</span>

- **Signal**:
 	- Has time dimension;
 	- updates occur after delta delay;
 	- global to architecture.
- **Variable**:
 	- Immediate assignment;
 	- no time dimension.
 	- local to process/procedure;
- **Syntax**:
 	- `signal s: integer;`
 	- `variable v: integer;`.
- **Assignment**:
 	- `s <= value;`
 	- `v := value;`.

<span style="background-color:dimgray">(6) Find the results of the following operations.</span>

- -15 mod 3 = 0;
- 15 mod (-3) = 0;
- -15 mod (-3) = 0;
- -15 rem 3 = 0;
- 15 rem (-3) = 0;
- -15 rem -3 = 0;

<span style="background-color:dimgray">(7) Declare two generic signal objects having `integer` data types with initial values 8 and 15.</span>

```VHDL
generic (i_1: integer := 8;
   i_2: integer := 15);
```
