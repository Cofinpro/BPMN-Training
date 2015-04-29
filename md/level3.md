# Ausführbare Modelle
----
## neue Elemente auf Ebene 3
----
### Event-Subprocess


<div>
	<div class="bpmn" bpmn-src="bpmn/level3/event-subprocess.bpmn" style="height: 375px" scale="1.1"/>
</div>

* Prozess startet bei einem Ereignis einen Unterprozess
	* Ereignis während der kompletten Laufzeit erwartet
	* unterbrechend oder nicht-unterbrechend


+++
### Event-Subprocess

<div>
	<div class="bpmn" bpmn-src="bpmn/level3/event-subprocess-collapsed.bpmn" style="height: 300px" scale="1.1"/>
</div>

* auch zusammengeklappt
	* optionaler Marker
* _nicht_ als Call-Aktivität

----
## Transaktionen
+++
### ACID

* Atomicity
* Consistency
* Isolation
* Durability

Note:
* Atomic – indivisible, all-or-nothing behavior
* Consistent – preventing an inconsistent state of the system, such as a debit with no corresponding credit
* Isolated – systems managing each account are locked during execution
* Durable –  state of participating systems is stored in database

+++
### Business-Transaktionen

* nicht atomar
	* Aktivitäten müssen *kompensiert* werden
* konsistent
* nicht isoliert
	* lang-laufend
	* Resourcen schwer sperrbar
* dauerhaft

+++
## 
### BPMN Transaktionen

<div class="bpmn" bpmn-src="bpmn/level3/transactional.bpmn" scale="1.2" style="height: 250px" />

+++
### Kompensation

<div class="bpmn" bpmn-src="bpmn/level3/transaction-compensate.bpmn" scale="1.2" style="height: 350px" />

+++
### Cancel Event (catch)

<div class="bpmn" bpmn-src="bpmn/level3/transaction-cancel.bpmn" scale="1.2" style="height: 350px" />

+++
### Cancel-Event (trow)

<div class="bpmn stretch" bpmn-src="bpmn/level3/transaction-compensate2.bpmn" scale="1.2" />

Note:
compensate implizit ausgelöst

+++
### Compensate-Event

<div class="bpmn stretch" bpmn-src="bpmn/level3/transaction-compensate3.bpmn" />

----
## Serialisierung

+++
### One Task Process

<div class="bpmn" bpmn-src="bpmn/level3/one-task-process.bpmn" scale="1.2" />

+++
### BPMN 2.0 Meta-Model

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC">
  <bpmn2:process id="Process_1" isExecutable="true">
    <bpmn2:startEvent id="startEvent" name="Start">
      <bpmn2:outgoing>SequenceFlow_1</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:task id="Task_1" name="Task">
      <bpmn2:incoming>SequenceFlow_1</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_2</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_1" name="" sourceRef="startEvent" targetRef="Task_1"/>
    <bpmn2:endEvent id="endEvent" name="Ende">
      <bpmn2:incoming>SequenceFlow_2</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_2" name="" sourceRef="Task_1" targetRef="endEvent"/>
  </bpmn2:process>
</bpmn2:definitions>
```

+++
### Diagram-Interchange

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC">
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_17" bpmnElement="startEvent">
        <dc:Bounds height="36.0" width="36.0" x="37.0" y="44.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_Task_41" bpmnElement="Task_1">
        <dc:Bounds height="80.0" width="100.0" x="123.0" y="22.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_1" bpmnElement="SequenceFlow_1" sourceElement="_BPMNShape_StartEvent_17" targetElement="_BPMNShape_Task_41">
        <di:waypoint xsi:type="dc:Point" x="73.0" y="62.0"/>
        <di:waypoint xsi:type="dc:Point" x="123.0" y="62.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_EndEvent_30" bpmnElement="endEvent">
        <dc:Bounds height="36.0" width="36.0" x="273.0" y="44.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_2" bpmnElement="SequenceFlow_2" sourceElement="_BPMNShape_Task_41" targetElement="_BPMNShape_EndEvent_30">
        <di:waypoint xsi:type="dc:Point" x="223.0" y="62.0"/>
        <di:waypoint xsi:type="dc:Point" x="273.0" y="62.0"/>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>
```