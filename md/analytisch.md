# Analytische Modelle
----
## Events

+++
<img data-src="img/events.png" alt="Überblick: Events" style="max-height:650px"></img>

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

+++
#### Signal

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-signal.bpmn" scale="1.2"/>
</div>

* Unterschied zu Message
	* global
	* keine Korrelation

+++
#### Conditional Event

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-conditional.bpmn" scale="1.2"/>
</div>

+++
### Timer 

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-timer.bpmn" scale="1.2" style="height:300px"/>
</div>

+++
### Timer Delay

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/events-timer-delay.bpmn" scale="1.2" style="height:300px"/>
</div>

Note:
was bei mehreren Akivitäten?

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
### Event-Gateway

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/gateways-event.bpmn" scale="1.2" style="height: 300px" />
</div>

* erstes eintretendes Ereignis bestimmt Gate
----
## Nachrichten

+++
### Send Task vs. Send Event

<div>
	<div class="bpmn" bpmn-src="bpmn/level2/messages.bpmn" scale="1.2"/>
</div>

<ul class="fragment">
	selbe Funktion, aber:

	<li>Zuständigigkeit</li>
	<li>Boundary Event</li>
	<li>Marker</li>	
	</ul>

+++
### Nachrichten zwischen Pools

<div class="bpmn stretch" bpmn-src="bpmn/level2/messages-between-processes.bpmn" />

+++
### Nachrichten in Pools

<h3 class="fragment">Nein!</h3>

<div class="bpmn stretch" bpmn-src="bpmn/level2/messages-in-processes.bpmn" />

+++
### Nachrichten in Pools

* Sequenzfluss impliziert Nachricht

<div class="bpmn stretch" bpmn-src="bpmn/level2/messages-in-processes.bpmn" />

+++
### Nachrichten in Pools

* Datenobjekte können Rolle der Nachricht übernehmen

<div class="bpmn stretch" bpmn-src="bpmn/level2/messages-in-processes3.bpmn" />

+++
### Nachrichten in Pools

* Benachrichtigungen direkt als Task	

<div class="bpmn stretch" bpmn-src="bpmn/level2/messages-in-processes4.bpmn" />

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
