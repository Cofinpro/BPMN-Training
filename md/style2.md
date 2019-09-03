## Style-Guide für Level 2
+++

### semi-offizielle Regel
+++
### Sequenzflüsse

* Flow-Elemente an beiden Enden
* alle Flow-Elemente haben eingehende Kanten außer
	* Start-Event
	* Boundary Events
	* Link-Event (catching)
	* (weitere auf Level 3)
* alle Flow-Elemente haben ausgehende Kanten außer
	* End-Events
	* Link-Event (throwing)
	* (weitere auf Level 3)

+++
### Sequenzflüsse

* überqueren keine Poolgrenzen
* überqueren keine Subprozess-Grenzen
* keine bedingten Sequenzflüsse
	* als einzige ausgehende Kante
	* aus parallel- oder Event-Gateways
* maximal ein Default-Flow

+++
### Message-Flows

* nicht innerhalb eines Prozesses/Pools
* Quelle ist
	* Message-Event (Start, Throwing Interm.)
	* Aktivität
	* Black-Box-Pool
* Ziel ist
	* Message-Event (End, Catching Interm.)
	* (weitere auf Level 3)
* beide Enden verbunden

+++
### Start-Events

* kein eingehender Sequenzfluss
* kein ausgehender Messge-Flow
* _kein_ Error-Trigger
* in Subprozess: nur None-Trigger

Note: Ausnahmen auf Level 3 

+++
### End-Event

* kein eingehender Messge-Flow
* kein ausgehender Sequenzfluss
* bei ausg. Nachrichtenflow nur Message-Result

+++
### Boundary-Events

* genau ein ausgehender Sequenzfluss
* keine eingehenden Sequenzflüsse
* Error-Boundary Events an Subprozessen
	* ein passendes Error-End-Event im Subprozess
* Error-Boundary Events immer interrupting
* Escalate-Boundary Events an Subprozessen
	* ein passendes Escalate-End-Event im Subprozess

+++
### Intermediate-Events

* bei eingehendem Message-Flow 
	* nur Message-Trigger
* bei ausgehendem Message-Flow
	* nur Message-Result

+++
#### Throwing Intermediate Events

* erlaubte Typen
	* Message
	* Signal
	* Escalation
	* Link
* Throwing Link
	* keine ausgehende Kante erlaubt

+++
#### Catching Intermediate Events

* erlaubte Typen
	* Message
	* Signal
	* Timer
	* Link
	* Conditional
* Catching Link
	* keine eingehende Kante erlaubt

+++
### Gateway

* keine Message-Flows
* Splitting: mehr als ein Ausgang
* Event-Gateway: erlaubte Nachfolger
	* catching intermediate event
	* Receive Task

+++
### Prozesse (Pools)

* mindestens eine Aktivität
* Elemente dürfen in max. einem Pool sein
* Pools enthalten keine Pools
* Sub-Prozesse in Pools
	* enthalten identische Teilnehmer (Lanes)

---- 
## Best-Practices

+++
### Beschriftung

* Aktivität: Verb - Substantiv
* keine Aktivitäten mit identischem Namen in einem Prozess
	* Ausnahme: Call-Activity

+++
### Beschriftung: Events
* Trigger Start Event: Auslöser als Name
	* Message Start Event: "Message empfangen"
	* Timer: Zeitpunkt/Plan
	* Signal: Signal-Name
	* Conditional: Regel oder Referenz

+++
### Beschriftung: Intemediate-Events

* Boundary Events _sollten_ beschriftet werden
* Intermediate Events _sollten_ beschriftet werden
* Error-, Escalate-Boundary-Event
	* Name entspricht End-Event des Childs
* Throwing u. Catching- Events mit selbem Namen, wenn im selbem Prozess
	* insb. Link-Event
* End-Events beschriftet mit Zustand

+++
### Beschriftung Gateways
* Splitting XOR
	* maximal eine unbeschr. Kante
* Splitting (X)OR
	* falls eine Kante unbeschriftet -> Gateway beschriften

+++
### Beschriftung: End-Events
* keine zwei End-Events mit selbem Namen
* bei Unterprozessen mit folgendem Gateway
	* Beschriftung angleichen

+++
### Unterprozesse

* maximal ein Start-Event
* Name des Unterprozeses gleich der Aufruf-Aktivität
* keine aufgeklappten Unterprozesse für alleinstehende Prozesse

+++
### Messages

* Beschriftung Message-Flow: Name der Message
* Message-Flows einzeichnen für:
	* Send-Tasks
	* Receive-Tasks
	* Message Events
* Message-Prozesse von Unterprozessen:
	* auf Parent Ebene abbilden	

----
## Palette
### eCH-0158

* Schweizer Standard der öffentl. Verwaltung
* Ziel: Vereinheitlichung der Modellierungsoptionen (d.h. Freiheitsgrade) des BPMN-Standards
* adressiert Prozessverantwortliche, Prozessmanager und Unternehmensarchitekten

[Link](http://www.ech.ch/vechweb/page?p=dossier&documentNumber=eCH-0158&documentVersion=1.1)

+++
### eCH-0158
<div class="stretch">
  <object width="100%" height="100%" type="application/pdf" data="attachments/eCH-0158_V1.1.pdf">
    <p>Insert your error message here, if the PDF cannot be displayed.</p>
  </object>
</div>
