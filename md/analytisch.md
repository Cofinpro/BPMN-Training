# Analytische Modelle
----
## Events

+++
![Events](img/events.png "Überblick: Events")

----
### neu in Level 2 <br/	> Intermediate Events

Note:
bisher
Start - löst Prozess aus
Ende - beendet einen Prozess

+++

#### Throwing

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-throwing.bpmn" scale="1.5" />
</div>

* schwarzes Symbol
* Prozess _erzeugt_ ein Ereignis
* treten sofort und automatisch ein
* nicht alle Typen möglich

+++
#### Catching

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-catching.bpmn" scale="1.5"/>
</div>

* weißes Symbol
* Prozess _erwartet_ ein Ereignis
* von den meisten Ergeignissen unterstützt
  * aber nicht von allen

+++
#### Boundary Intermediate Events

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-boundary-interrupting.bpmn" scale="1.2" style="height:300px" />
</div>

* am Rande einer Aktivität
* keine eingehende Kante
* Prozess hört auf Ereignis
  * nur _während der Ausführung_ der Aktivität

+++
##### unterbrechend

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-boundary-interrupting.bpmn" scale="1.2" style="height:300px"/>
</div>

beendet die Aktivität sofort

+++
##### nicht-unterbrechend

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-boundary-non-interrupting.bpmn" scale="1.2" style="height:300px" />
</div>

----
### weitere Event-Typen

+++
#### Escalation Event

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-escalate.bpmn" scale="1.2" style="height:300px"/>
</div>


Note:
* nicht spezifiziert, was das Ereignis triggert
* nur das es getriggert wird

+++
#### Signal

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-signal.bpmn" scale="1.2"/>
</div>

* Unterschied zu Message
	* global
	* keine Korrelation

+++
#### Error Event

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-error.bpmn" scale="1.2" style="height:300px"/>
</div>

Note:
* Parent-Level unterscheidung
* Error Event beendet Prozess

+++
#### Conditional Event

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-conditional.bpmn" scale="1.2"/>
</div>

* feuert, sobald Bedingung erfüllt
* Beschriftung!

+++
#### Link-Ereingis

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-link.bpmn" scale="1.2"/>
</div>

* beliebig viele throws-Ereignisse

----
### Event-Subprocess


<div>
	<div class="bpmn" bpmn-src="bpmn/level2/event-subprocess.bpmn" style="height: 350px" scale="1.1"/>
</div>

* Prozess startet bei einem Ereignis einen Unterprozess
	* Ereignis während der kompletten Laufzeit erwartet
	* unterbrechend oder nicht-unterbrechend


+++
### Event-Subprocess

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/event-subprocess-collapsed.bpmn" style="height: 300px" scale="1.1"/>
</div>

* auch zusammengeklappt
	* optionaler Marker
* _nicht_ als Call-Aktivität
----
## Nachrichten

### Event-Gateway

### Message-Boundary-Events


### Nachrichten in Pools

### Asynchrones Messaging


----

## Iterationen und Instanzen

----
### Schleifen

<div class="bpmn" bpmn-src="bpmn/level2/iteration-activity.bpmn" scale="1.2" style="height: 200px"/>

+++
### Scheifen (alternativ)
<div class="bpmn" bpmn-src="bpmn/level2/iteration-loop.bpmn" scale="1.2" style="height: 250px"/>

----
### Multi-Instance-Aktivität (Parallel)

<div class="bpmn" bpmn-src="bpmn/level2/multi-instance-activity-parallel.bpmn" scale="1.2" style="height: 250px"/>

Note:
Entsprechung Gateway?

+++
### Multi-Instance-Aktivität (Sequentiell)

<div class="bpmn" bpmn-src="bpmn/level2/multi-instance-activity.bpmn" scale="1.2" style="height: 250px"/>

+++
### Multi-Instance Subprozess

<div class="bpmn" bpmn-src="bpmn/level2/multi-instance-subprocess.bpmn" scale="1.1" style="height: 300px" />

----
### Synchronisierung




----
## Splitting und Merging
+++
### Or-Gateway

<div class="bpmn" bpmn-src="bpmn/level2/splitting-or.bpmn" scale="1.2" style="height: 350px" />

+++
### Conditional Splitting

<div class="bpmn" bpmn-src="bpmn/level2/splitting-conditional.bpmn" scale="1.2" style="height: 350px" />

+++
### Merging Or

<div class="bpmn" bpmn-src="bpmn/level2/merging-or.bpmn" scale="1.2" style="height: 350px" />

+++
### Merging Or
Beispiel

<div class="bpmn" bpmn-src="bpmn/level2/merging-or-use-case.bpmn" scale="1.2" style="height: 350px" />

+++
### Merging XOR

<div>
<div class="bpmn" bpmn-src="bpmn/level2/merging-xor.bpmn" scale="1.2" style="height: 350px" />
</div>

<em fragment="1">Nein!</em>
<span fragment="2">Multi-Merge</span>

Note:
Bedingung exklusiv

+++
### Merging XOR

<div class="bpmn" bpmn-src="bpmn/level2/merging-xor2.bpmn" scale="1.2" style="height: 350px" />

+++
### Merging And Splitting

<div class="bpmn" bpmn-src="bpmn/level2/merging-and-splitting.bpmn" scale="1.1" style="height: 350px" />

+++
### Zusammenfassung <br/> Implizites Merging und Splitting

<div class="bpmn" bpmn-src="bpmn/level2/merging-and-splitting-implicit.bpmn" scale="1.2" style="height: 350px" />

+++
### Complex Gateway

(nicht Teil von Level 2)
<div>
<div class="bpmn" bpmn-src="bpmn/level2/merging-complex.bpmn" style="height: 350px" />
</div>

Note:
Diskriminator Pattern

----
## Transaktionen

----
## Palette
### eCH-0158

* Schweizer Standard der öffentl. Verwaltung
* Ziel
	* Vereinheitlichung der Modellierungsoptionen (d.h. Freiheitsgrade) des BPMN-Standards

* adressiert Prozessverantwortliche, Prozessmanager und Unternehmensarchitekten

+++
### eCH-0158
<div class="stretch">
  <object width="100%" height="100%" type="application/pdf" data="attachments/eCH-0158_V1.1.pdf">
    <p>Insert your error message here, if the PDF cannot be displayed.</p>
  </object>
</div>
