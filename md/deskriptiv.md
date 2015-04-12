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

<div class="bpmn" bpmn-src="bpmn/level1/events.bpmn"/>

----

## Aktivitäten/Tasks

<div class="bpmn" bpmn-src="bpmn/level1/activity.bpmn"/>

----

## Gateways

<div class="bpmn" bpmn-src="bpmn/level1/gateways.bpmn"/>

+++

### Fork and Join

<div class="bpmn" bpmn-src="bpmn/level1/gateways-fork-and-join.bpmn" style="height: 300px;"/>

----

## Pools und Lanes

<div class="bpmn" bpmn-src="bpmn/level1/pools.bpmn" style="height: 300px;"/>

+++

## Pools und Lanes 
Beispiel

<div class="bpmn" bpmn-src="bpmn/level1/pools2.bpmn" style="height: 300px;"/>

+++

## Pools und Lanes 
verschachtelte Lanes

<div class="bpmn" bpmn-src="bpmn/level1/pools-nested-lanes.bpmn" style="height: 500px;"/>

+++

## Blackbox-Pools

<div class="bpmn" bpmn-src="bpmn/level1/pools-blackbox.bpmn" style="height: 300px;"/>

----

## Sub-Prozesse

<div >
	<div class="bpmn" bpmn-src="bpmn/level1/subprocess-collapsed.bpmn"/>
</div>
<div class="fragment" >
	<div class="bpmn" bpmn-src="bpmn/level1/subprocess-expanded.bpmn"/>
</div>

+++

## Call-Activity

<div class="bpmn" bpmn-src="bpmn/level1/call-activitiy.bpmn"/>

---- 

## Datenobjekte
+++
### Data-Input/-Output

<div>
<div class="bpmn" bpmn-src="bpmn/level1/data-output.bpmn" style="height: 200px;"/>
</div>
<div class="fragment">
<div class="bpmn" bpmn-src="bpmn/level1/data-input.bpmn" style="height: 200px;"/>
</div>

+++

### Daten-Objekte

<div class="bpmn" bpmn-src="bpmn/level1/data-object-in-out.bpmn" style="height: 200px;"/>

Note:
Label in/out

+++

### Data-Store
<div class="bpmn" bpmn-src="bpmn/level1/data-store.bpmn" style="height: 250px;"/>

---- 

## Artefakte

+++

### Annotationen

<div class="bpmn" bpmn-src="bpmn/level1/artifacts-annotation.bpmn" style="height: 250px;"/>

+++

### Gruppen

<div class="bpmn stretch" bpmn-src="bpmn/level1/artifacts-group.bpmn" />
