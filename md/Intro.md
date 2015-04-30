# Training<br/>BPMN 2.0

----

## Literatur

![Praxishandbuch BPMN](img/books/praxishandbuch-bpmn.png)

+++

## Literatur
![BPMN20](img/books/allweyer-bpmn20.png)

+++

## Literatur
![BPMN20](img/books/bruce-silver-bpmn-method.png)

+++
## Literatur

[BPMN-Spec](http://www.omg.org/spec/BPMN/2.0.2/)

----
## Folien

http://cofinpro.github.io/BPMN-Training/

Download als PDF:<br/>
https://github.com/Cofinpro/BPMN-Training/releases/

----
## Einführung

* Business-Process-Model-Notation
* OMG Standard (aktuell 2.0.2)

* Anspruch
	* Notation für Geschäftsprozesse
	* verständlich für alle Stakeholder
	* maschinenlesbar und ausführbar

* spezifiziert Mapping zu BPEL4WS
* Standardisiert als ISO/IEC 19510:2013

----

## Abstraktionslevel

![Level](img/abstraktionslevel.png)

+++

### Deskriptive Modelle

* stellen Geschäftsprozess abstrakt dar
* meist nur "Happy Path"

* Ziel
	* Kommunikation von Prozessen über Organisationseinheiten hinweg
	* häufiger Adressat: Management

* Umsetzung BPMN
	* sehr eingeschränkte Elementpalette

* Detailgrad entspricht etwa Flussdiagrammen

+++
### Analytische Modelle

* detaillierte Beschreibung
	* Verzweigungen, Fallunterscheidungen
	* Ausnahmebehandlung

* Ziel
	* Dokumentation in Organisationseinheit
	* IT-Spezifikation, Simulation

* Umsetzung BPMN
	* ergänzend Einsatz von Gateways
	* Intermediate-/Boundary-Events

* Detailgrad entspricht etwa EPKs

Note:
Gateway: (Entscheidung, Parallelität)

+++
### Ausführbare Modelle

* sehr detaillierte Beschreibung
* angereichert um technische Details

* Ziel
    * (Teil)-Automatisierung mittels Prozessengine

* Umsetzung BPMN
    * ergänzt um toolspezifische Informationen
    * auch anderer Technologien möglich
        * BPMN spezifiziert Mapping zu BPEL4WS
