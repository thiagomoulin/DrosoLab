"use client";

import { useState } from "react";
import Image from "next/image";

interface ResearchLine {
  title: string;
  img: string;
  text: string;
}

interface SectionData {
  label: string;
  lines: ResearchLine[];
}

const sections: SectionData[] = [
  {
    label: "Environment",
    lines: [
      {
        title: "New Methods to Manage Invasive Insects",
        img: "/projects/fig_env1.png",
        text: `Climate change has led to a rapid expansion of invasive insect species into new regions, creating significant challenges for pest control. In this research line, we aim to develop a high-throughput screening system using Drosophila suzukii, a major pest of soft fruits, as a model for identifying effective combinations of semiochemical attractants and biopesticides.
A custom-designed behavioral testing platform is being developed, featuring multiple arenas and integrated sensors that allow for large-scale, long-term testing of insect responses. The data generated will be analyzed using machine learning tools to efficiently narrow down the most promising compounds for further investigation.
Our goal offers a rapid and environmentally sustainable approach to pest management, potentially applicable to various invasive insect species. The outcomes include the development of a comprehensive, accessible database of effective biopesticide and semiochemical formulations that can inform future research and policy. These projects are built on extensive expertise in insect behavior and chemical ecology.`
      },
      {
        title: "Ecological Impact of Environmental Pollutants",
        img: "/projects/fig_env2.png",
        text: `The growing presence of environmental pollutants, particularly in complex mixtures, poses a serious and often underestimated risk to ecosystems and human health. We use Drosophila melanogaster as a model organism to investigate the short- and long-term effects of these pollutants, offering an efficient and ethically responsible alternative to traditional vertebrate models.
We combine genetic tools, physiological measurements, and behavioral assays for a detailed investigation into how common environmental toxins interfere with conserved biological systems. Findings have shown that certain chemicals can impair metabolic functions, disrupt hormonal signaling, and alter circadian rhythms, effects that may have cascading impacts on both individual health and broader ecological dynamics.
A particular strength of this approach lies in its ability to test mixtures of toxins at low doses, reflecting real-world exposure scenarios. Preliminary results suggest that combinations of pollutants may exert synergistic effects, producing biological disruptions that would not be predicted from single-compound studies alone. With this research line, we want to contribute to a better understanding of how environmental contamination affects both individual organisms and population-level resilience, with implications for conservation biology, public health, and regulatory science.`
      }
    ]
  },
  {
    label: "Neuroendocrinology",
    lines: [
      {
        title: "Effects of Statins and the Role of Hmgcr",
        img: "/projects/fig_neuroend1.png",
        text: `Statins are among the most widely prescribed medications worldwide, primarily used to lower cholesterol and reduce cardiovascular risk. While effective, their widespread use has brought increased attention to side effects affecting metabolism, muscle function, and cognition, many of which remain poorly understood.
This research line investigates the molecular mechanisms and brain circuits involved in the neuroendocrine effects of statins, with a focus on their primary target, Hmgcr. Using Drosophila melanogaster as a model, we explore how statin treatment and Hmgcr inhibition affect systemic metabolism, mitochondrial function, and neuromuscular integrity. Findings suggest that statins can induce myofibrillar damage, mitochondrial fragmentation, and locomotor deficits. Reduced expression of chloride channels and impaired fatty acid oxidation have also been observed, pointing to a multifaceted disruption of muscular physiology.
In the central nervous system, Hmgcr activity in insulin-producing neurons plays a key role in regulating metabolic hormones and feeding behavior. Disruption of this pathway leads to altered energy balance, lipid accumulation, and changes in glucose homeostasis, highlighting a conserved neuroendocrine mechanism with potential relevance to statin-associated side effects in humans.
By dissecting both peripheral and central effects of statins, we aim to clarify the physiological trade-offs of long-term treatment and contribute to a better understanding of the molecular basis for statin-induced impairments. The results may inform the development of improved therapies or adjunct treatments to mitigate unwanted effects in vulnerable populations.`
      },
      {
        title: "Neuroendocrine Control of Metabolism and Energy Balance",
        img: "/projects/fig_neuroend2.png",
        text: `Metabolic regulation depends on a complex interplay between the brain, peripheral organs, and environmental cues. This research line aims to investigate how neuroendocrine circuits integrate genetic and physiological signals to maintain energy balance, with a focus on insulin and glucagon-like signaling pathways in Drosophila melanogaster.
We explore how specific neuropeptides and their regulatory genes influence feeding behavior, nutrient sensing, and hormonal control of metabolism. Particular attention is given to evolutionarily conserved genes associated with human metabolic disorders, including those linked to obesity and insulin resistance. By targeting these genes in defined neuronal populations, we aim to dissect their roles in central metabolic regulation.
Our projects also examines how external factors—such as sleep disruption and nutrient availability—interact with neuroendocrine systems, especially during aging. These environmental stressors may unmask compensatory or maladaptive mechanisms relevant to long-term metabolic health.
Through a combination of genetic, behavioral, and physiological approaches, we seek to build a systems-level understanding of how the brain maintains metabolic homeostasis. The long-term goal is to clarify fundamental principles of neuroendocrine regulation that may inform future research on metabolic disease and resilience.`
      }
    ]
  },
  {
    label: "Neuropsychiatry",
    lines: [
      {
        title: "The Neural Basis of Behavior and Psychiatric Disorders",
        img: "/projects/fig_neuropsy1.png",
        text: `Understanding the neural mechanisms underlying behavior and psychiatric conditions remains one of the central challenges in neuroscience. Some of our projects explore how Drosophila melanogaster can be used to model key behavioral phenotypes relevant to psychiatric research and to identify conserved molecular and circuit-level processes involved in sensorimotor gating, reward, arousal, and emotional regulation.
We use pharmacological and genetic approaches to investigate how alterations in neurotransmission affect locomotion, feeding, and responses to sensory stimuli. Specific attention is given to behaviors such as prepulse inhibition, locomotion, and stress response, phenotypes that reflect core features of disorders like schizophrenia, depression, and bipolar disorder. We also examine how transient neurochemical perturbations during development can lead to lasting or even inheritable behavioral changes in adult flies.
To support high-throughput behavioral analysis, we employ automated platforms for tracking light-evoked responses, operant learning, circadian rhythms, and food intake preference. These tools allow for scalable and reproducible assessment of complex behaviors across different experimental conditions and genetic backgrounds.
We aim to provide insights into the fundamental neural circuits regulating motivated behaviors and how they are disrupted in disease-like states by taking advantage of the genetic accessibility and behavioral diversity of Drosophila. The ultimate goal is to establish Drosophila as a complementary model for psychiatric research, with potential applications in drug screening and mechanistic studies of mental health conditions.`
      },
      {
        title: "Genetic Links Between Metabolic and Psychiatric Disorders",
        img: "/projects/fig_neuropsy2.png",
        text: `Metabolic and psychiatric disorders frequently co-occur, yet the underlying biological mechanisms that connect them remain poorly defined. This research line investigates the shared genetic and neurobiological factors that regulate metabolism and behavior, using Drosophila melanogaster as a model system.
We focus on genes associated with obesity and metabolic traits that also influence behavioral outcomes relevant to psychiatric conditions such as bipolar disorder, depression, and schizophrenia. Several conserved gene homologs, including those related to lipid storage, meal frequency, aggression, and arousal, are studied for their roles in neural signaling pathways, particularly those involving octopamine and dopamine. These pathways regulate feeding behavior, energy balance, and reward sensitivity, which are commonly disrupted across metabolic and mood disorders.
By combining genetic manipulation, behavioral assays, and cross-species comparisons, we aim to clarify how specific gene networks contribute to both metabolic regulation and neuropsychiatric vulnerability. The project also considers how developmental and environmental factors modulate these gene-behavior relationships.
The goal is to establish an integrative framework for understanding the biological overlap between metabolic and psychiatric conditions. Drosophila offers a powerful platform for uncovering conserved molecular pathways, with implications for translational research and the identification of novel therapeutic targets.`
      }
    ]
  }
];

export default function ProjectsPage() {
  const [active, setActive] = useState(sections[0].label);

  return (
    <main className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <section>
          <h2 className="text-3xl font-bold text-left">Projects</h2>
          <hr className="mt-2 border-t-4 border-white w-1/3 mb-6" />
        </section>

        {/* Tabs */}
        <div className="flex border-b border-white/40 mb-6">
          {sections.map((sec) => (
            <button
              key={sec.label}
              onClick={() => setActive(sec.label)}
              className={
                `px-4 py-2 -mb-px text-lg font-medium transition-colors ` +
                (active === sec.label
                  ? "border-b-4 border-white text-white"
                  : "text-white/70 hover:text-white")
              }
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Content for Active Tab */}
        <div className="space-y-12">
          {sections
            .find((sec) => sec.label === active)!
            .lines.map((line) => (
              <div key={line.title} className="space-y-4">
                <h3 className="text-2xl font-semibold">{line.title}</h3>
                <div className="flex justify-center">
                  <Image
                    src={line.img}
                    alt={line.title}
                    width={600}
                    height={400}
                    className="rounded"
                  />
                </div>
                <p className="text-justify leading-relaxed whitespace-pre-line">
                  {line.text}
                </p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
