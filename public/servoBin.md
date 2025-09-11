It all started when I typed "Arduino" in YouTube search to look for ideas and get inspired.

While scrolling the suggestions, I stumbled upon a thumbnail featuring an electrical dustbin made with cardboard, that reminded me of a small plastic trash bin I bought ages ago that's laying on one of my wardrobe shelves, storing some useless things that I barely use.

The challenge was to try to make one without watching the video.

The tools I'd be using are:

- Arduino board of course;
- A sensor (Ultrasonic Sensor HC-SR04);
- A servo motor;
- A stick;
- The plastic bin.

Easy-Peasy.

# Step 1: Learn about the sensor

Resources I used for this purpose:

- [Complete Guide for Ultrasonic Sensor HC-SR04 with Arduino](https://randomnerdtutorials.com/complete-guide-for-ultrasonic-sensor-hc-sr04/);
- [Understanding and Connecting the HC-SR04 Sensor - Paul McWhorter](https://www.youtube.com/watch?v=M-UKXCUI0rE) (I highly recommend this YouTube channel, especially the Arduino playlist for everyone starting to learn Arduino, it helped me a lot!)

The <span style="color:CadetBlue">HC-SR04</span> is a sensor that uses sonar to determine the distance to an object.

It has 4 pins:

- <u>VCC</u>: powers the sensor (5V);
- <u>Trig</u>: trigger input pin;
- <u>Echo</u>: echo output pin;
- <u>GND</u>: ground.

This is how it works:

- The ultrasound transmitter -the trig pin- emits a high-frequency sound (40 kHz).
- The sound travels through the air, finds an object, and bounce back to the module.
- The ultrasound -the echo pin- receives the echo (the reflected sound).

To compute the distance: d = (speed of sound x time) / 2.

The speed of sound in the air at 20ºC (68ºF) is 343m/s.

Some relevant specs:

- <u>Range</u>: 2 cm - 400 cm;
- <u>Accuracy</u>: 0.3 cm;
- <u>Measuring Angle</u>: 30 degree;
- <u>Power Supply</u>: +5 V DC;

Image of the front:
![Front Image of the Sensor](/servobin/sensor-front.jpg)

The back:
![Back Image of the Sensor](/servobin/sensor-back.jpg)
Such a beauty, right?

# Step 2: The actual code

I will open the Arduino IDE and start by assigning the pins:

```C
// The sensor's pins
int trigPin = 12;
int echoPin = 11;

// The servo's pins
int servoPin = 9;
```

And then, defining some variables:

```C
// Servo position
int servoPos;

// Sensor related data
long duration, cm;
```

- `duration` is the time between the emission and the reception of the signal.
- `cm` is the computed distance in centimeter.

And initiating a new Servo instance:

```C
// Initiate a Servo instance
Servo servo;
```

(Spoiler alert) Here is the servo motor I will be using:
![Servo Motor](/servobin/servo.jpg)

Now, the `setup()`:

```c
Serial.begin(9600);

// Associating the Servo instance to the servo signal pin.
servo.attach(servoPin);

// Defining inputs and outputs
pinMode(trigPin, OUTPUT);
pinMode(echoPin, INPUT);
```

In the `loop()`, I will initialize the servo position:

```c
servoPos = 180;
```

And then:

```c
digitalWrite(trigPin, LOW);
delayMicroseconds(10);
digitalWrite(trigPin, HIGH); // Stays high until ping makes it back.
delayMicroseconds(10);
digitalWrite(trigPin, LOW);
```

- A `LOW` pulse is sent to ensure a clear `HIGH` pulse later;
- A`HIGH` pulse is sent for 10 microseconds;

`pulseIn()` is used to get the sound wave travel time in microseconds:

```c
duration = pulseIn(echoPin, HIGH);
```

>Pulse length = time to travel to the objects + time on the way back.

And then we calculate the distance to an object in centimeters:

```c
cm = (duration / 2) / 29.1;
```

- The formula used being `distance = ( traveltime / 2 ) x speed of sound`;
- The speed of sound is: 343 m/s = 0.0343 cm/mu S = 1 / 29.1 cm/mu S.

Now, we check if the full distance is less than a desired distance to rotate the servo. I will opt for 10cm:

```c
if (cm < 10) {
 servoPos = 70;
}

servo.write(servoPos);
```

And then resetting the servo angle to its initial position:

```c
servoPos = 180;
```

AND TADAAAAA!
![Final Result](/servobin/final-result.jpg)

A video demo:
![Video Result](/servobin/video-result.mp4)
