# Analytische Modelle
----
## Events

+++
![Events](../img/events.png "Überblick: Events")

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

+++

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

----
## Nachrichten

### Event-Gateway

### Message-Boundary-Events


### Nachrichten in Pools

### Asynchrones Messaging


----

## Iterationen und Instanzen

### Schleifen

+++
### Multi-Instance-Aktivität

+++
### Synchronisierung

+++
### Batch-Verarbeitung


----

## Splitting und Merging

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
  <object width="100%" height="100%" type="application/pdf" data="/attachments/eCH-0158_V1.1.pdf">
    <p>Insert your error message here, if the PDF cannot be displayed.</p>
  </object>
</div>
