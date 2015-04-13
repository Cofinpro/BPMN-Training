# Style
----
## Offizielle Regeln
----
### Sequenzflüsse

* überschreiten nie die Poolgrenze
* überschreiten nie Sub-Prozessgrenzen 

+++
### Sequenzflüsse

* verbinden
	* Events
	* Aktivitäten
	* Gateways
* an _beiden_ Enden

----
### Nachrichtenflüsse

* nie innerhalb eines Pools
* verbinden
	* Aktivitäten
	* Message-Events
	* Back-Box-Pools

----
## Best-Practices

----
### Elemente beschriften

* Elemente beschriften:
	* Labels verwenden
	* Marker
	* Annotations

----
### Hierarchische Modelle verwenden

* jedes Diagramm passt auf eine Seite
* Ende-Zu-Ende modellieren
* Label angleichen

Note:
wenn Ende-zu-Ende - Child ohne Anpassung an Parent änderbar

----
### Black-Box-Pools für externe Teilnehmer

* interne Abläufe sind nicht bekannt
* Messages schon

----
### Primärprozesse beginnen mit Message

* Message-Start-Event verwenden

Note:
Message zu Aktivität heißt: _möglich_
Message zu Event heißt: _muss_

----
### interne Prozesse in *einem* Pool

* Lanes für Organisiationseinheiten
* gemeinsamer Pool
	* gemeinsamer Prozess
* getrennter Pool
	* unabhängiger Prozess

Note:
problematisch: zeitlich versetzte Prozesse
gemeinsamer Datastore

----
### Pool labels

* White-Box: Prozessname
* Blackbox: Name des Beteiligten

Note:
Spec macht keine Vorgaben
Semantische Gründe: id vs name

----
### Beschriftung von End-Events

* getrennte End Events für
	* Ergebnisse
	* Exceptions
* _nicht_ mehrere End-Events mit selben Namen

----
### Aktivitäten beschriften

* ${Substantiv} ${Verb}
* Representiert Aktion
* nicht Zustand
* nicht Funktion

+++
#### Beispiel

* _Antrag bearbeiten_ statt 
	* _Antrag OK_ (Zustand)
	* _Antragsbearbeitung_ (Funktion)

* _Zeiten erfassen_ statt
	* _Zeiten erfasst_ (Zustand)
	* _Zeiterfassung_ (Funktion)

----
## Korrekte Startevents verwenden

* Message für Impuls von Außen
* Timer für zeitgesteuert
	* Beschriftung beachten (_monatlich_, _Montags 8:00_)
* None für manuelle Starts