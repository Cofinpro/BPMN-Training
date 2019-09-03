# Deskriptive Modelle

----
## Level 1 Palette

* Activity: Task (User, Service, None), Subprocess, Call Activity 
* Gateway: Exclusive, Parallel 
* Start event: None Message, Timer 
* End event: None, Message, Terminate 
* Sequenz- und Nachrichtenfluss
* Pool und Lane 
* Data object, Data store, and Data association 
* Documentation 
* Artifact: Text annotation, Association, and Group

----
## Events

<div class="bpmn" bpmn-src="bpmn/level1/events.bpmn"></div>

----
## Aktivitäten/Tasks

<div class="bpmn" bpmn-src="bpmn/level1/activity.bpmn"></div>

----
## Gateways

<div class="bpmn" bpmn-src="bpmn/level1/gateways.bpmn"></div>

+++
### Fork and Join

<div class="bpmn" bpmn-src="bpmn/level1/gateways-fork-and-join.bpmn" style="height: 300px;"></div>

----
## Pools und Lanes

<div class="bpmn" bpmn-src="bpmn/level1/pools.bpmn" style="height: 300px;"></div>

+++
## Pools und Lanes 
Beispiel

<div class="bpmn" bpmn-src="bpmn/level1/pools2.bpmn" style="height: 300px;"></div>

+++
## Pools und Lanes 
verschachtelte Lanes

<div class="bpmn" bpmn-src="bpmn/level1/pools-nested-lanes.bpmn" style="height: 500px;"></div>

+++
## Blackbox-Pools

<div class="bpmn" bpmn-src="bpmn/level1/pools-blackbox.bpmn" style="height: 300px;"></div>

----
## Sub-Prozesse

<div>
	<div class="bpmn" bpmn-src="bpmn/level1/subprocess-collapsed.bpmn"></div>
</div>
<div class="fragment" >
	<div class="bpmn" bpmn-src="bpmn/level1/subprocess-expanded.bpmn"></div>
</div>

+++
## Call-Activity

<div class="bpmn" bpmn-src="bpmn/level1/call-activitiy.bpmn"></div>

---- 
## Datenobjekte

+++
### Data-Input/-Output

<div>
<div class="bpmn" bpmn-src="bpmn/level1/data-output.bpmn" style="height: 200px;"></div>
</div>
<div class="fragment">
<div class="bpmn" bpmn-src="bpmn/level1/data-input.bpmn" style="height: 200px;"></div>
</div>

+++
### Daten-Objekte

<div class="bpmn" bpmn-src="bpmn/level1/data-object-in-out.bpmn" style="height: 200px;"></div>

Note:
Label in/out

+++
### Data-Store
<div class="bpmn" bpmn-src="bpmn/level1/data-store.bpmn" style="height: 250px;"></div>

---- 
## Artefakte

+++
### Annotationen

<div class="bpmn" bpmn-src="bpmn/level1/artifacts-annotation.bpmn" style="height: 250px;"></div>

+++
### Gruppen

<div class="bpmn stretch" bpmn-src="bpmn/level1/artifacts-group.bpmn"></div>
