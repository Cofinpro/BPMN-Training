# Methodik
deskriptive Prozesse

----
## Ziele von "gutem BPMN"

+++
### Vollständigkeit

* Ende-zu-Ende Betrachtung
* Interaktionen berücksichtigen

+++
### Verständlichkeit

* Ablauf ist eindeutig
* verständlich für Beteiligte
* auf Papier nachvollziehbar

Note:
Papier: Label-Matching

+++
### Gemeinsam verwendbar

von IT und Fachseite

* beschreibt
	* Fachprozesse
	* nicht Implementierung

Note:
nicht Notation, Inhalt

+++
### Strukturelle Konsistenz

konsistent modellieren

Note:

----
## Werkzeuge
+++
## Hierarchische Prozessmodelle

* Prozesse in Teilprozesse zerlegen
* unterschiedliche Abstraktionsebenen
* Adressaten berücksichtigen

+++
### Top-Level

<div class="bpmn stretch" bpmn-src="bpmn/methodik1/top-level.bpmn" style="height: 300px;"/>

+++
### Child-Level

<div class="bpmn stretch" bpmn-src="bpmn/methodik1/child-level.bpmn" style="height: 300px;"/>

+++
## Prozessende

* mehr als ein End-Event möglich
* repräsentieren mögliche Prozess-Ergebnisse
* Unterscheidung zwischen "normal" und Exception

+++
### Beispiel

<div class="bpmn" bpmn-src="bpmn/methodik1/end-states.bpmn" style="height: 300px;"/>

+++
### Beispiel

<div class="bpmn" bpmn-src="bpmn/methodik1/end-states2.bpmn" style="height: 300px;"/>
----
## Vorgehen

+++
### 1. Scope bestimmen

* Wann beginnt der Prozess?
* Wann endet er?
* Was repräsentiert er?
* Welche Ergebnisse (Endzustände) gibt es?

+++
### 2. High-level-Map

* Was sind die wichtigsten Aktivitäten (&lt; 10)?
* Welche Ergebnisse haben sie?

+++
### 3. Top-Level-Prozess

* BPMN-Diagramm Top-Level-Prozess erstellen
* Aktivitäten als Sub-Prozesse
* ein End-Ereignis pro Ergebnis
* Gateways für Entscheidungen und Parallelität

+++
### 4. Unterprozesse modellieren

* Prozessdiagramm für jeden Top-Level Subprozess
* Top-Level Gateways als Endereignisse

+++
### 5. Nachrichtenflüsse

* Business-Kontext in Form von Nachrichtenflüssen
* Black-Box-Pools
	* externe Beteiligte
	* Provider
	* andere interne Prozesse
* in Top-Level und Unterprozessen

Note: Beschriftung der Flows angleichen

+++
### 6. weitere Levels

* ggf. Schritt 4 &amp; 5 wiederholen
