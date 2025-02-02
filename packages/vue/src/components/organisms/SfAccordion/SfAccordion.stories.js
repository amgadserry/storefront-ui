import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { SfAccordion, SfList, SfMenuItem } from "@storefront-ui/vue";
storiesOf("Organisms|Accordion", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfAccordion, SfList, SfMenuItem },
    props: {
      open: {
        default: text("open", "Clothing", "Props"),
      },
      multiple: {
        default: boolean("multiple", false, "Props"),
      },
      showChevron: {
        default: boolean("showChevron", false, "Props"),
      },
      transition: {
        default: text("transition", "sf-expand", "Props"),
      },
    },
    data() {
      return {
        accordions: [
          {
            header: "Clothing",
            items: [
              { label: "All", count: "280" },
              { label: "Skirts", count: "11" },
              { label: "Dresses", count: "32" },
            ],
          },
          {
            header: "Accessories",
            items: [
              { label: "All", count: "80" },
              { label: "Belts", count: "101" },
              { label: "Bag", count: "2" },
            ],
          },
          {
            header: "Shoes",
            items: [
              { label: "All", count: "2" },
              { label: "Trainers", count: "22" },
              { label: "Sandals", count: "55" },
            ],
          },
        ],
      };
    },
    template: `<SfAccordion 
        :open="open" 
        :multiple="multiple"
        :show-chevron="showChevron"
        :transition="transition">
      <SfAccordionItem 
        v-for="accordion in accordions" 
        :key="accordion.header" 
        :header="accordion.header"
      >
        <SfList>
          <SfListItem
            v-for="item in accordion.items"
            :key="item.label"
            >
            <SfMenuItem 
              :label="item.label" 
              :count="item.count"
            />
          </SfListItem>
        </SfList>
      </SfAccordionItem>
      </SfAccordion>`,
  }))
  .add("[slot] header", () => ({
    components: { SfAccordion, SfList, SfMenuItem },
    props: {
      open: {
        default: text("open", "Shoes", "Props"),
      },
      multiple: {
        default: boolean("multiple", false, "Props"),
      },
      showChevron: {
        default: boolean("showChevron", false, "Props"),
      },
      transition: {
        default: text("transition", "sf-expand", "Props"),
      },
    },
    data() {
      return {
        accordions: [
          {
            header: "Clothing",
            items: [
              { label: "All", count: "280" },
              { label: "Skirts", count: "11" },
              { label: "Dresses", count: "32" },
            ],
          },
          {
            header: "Accessories",
            items: [
              { label: "All", count: "80" },
              { label: "Belts", count: "101" },
              { label: "Bag", count: "2" },
            ],
          },
          {
            header: "Shoes",
            items: [
              { label: "All", count: "2" },
              { label: "Trainers", count: "22" },
              { label: "Sandals", count: "55" },
            ],
          },
        ],
      };
    },
    template: `<SfAccordion
        :open="open"
        :multiple="multiple"
        :show-chevron="showChevron"
        :transition="transition"
        :style="{maxWidth: '186px', padding: '1rem'}">
      <SfAccordionItem
          v-for="accordion in accordions"
          :key="accordion.header"
          :header="accordion.header"
      >
        <template #header="{header, isOpen, accordionClick, showChevron}">
          <div @click="accordionClick" :style="{cursor: 'pointer'}">CUSTOM HEADER</div>
        </template>
        <SfList>
          <SfListItem
              v-for="item in accordion.items"
              :key="item.label"
              :style="{margin: '10px 0'}">
            <SfMenuItem
                :label="item.label"
                :count="item.count"
            />
          </SfListItem>
        </SfList>
      </SfAccordionItem>
    </SfAccordion>`,
  }))
  .add("All open", () => ({
    components: { SfAccordion, SfList, SfMenuItem },
    props: {
      open: {
        default: text("open", "all", "Props"),
      },
      multiple: {
        default: boolean("multiple", true, "Props"),
      },
      showChevron: {
        default: boolean("showChevron", false, "Props"),
      },
      transition: {
        default: text("transition", "sf-expand", "Props"),
      },
    },
    data() {
      return {
        accordions: [
          {
            header: "Clothing",
            items: [
              { label: "All", count: "280" },
              { label: "Skirts", count: "11" },
              { label: "Dresses", count: "32" },
            ],
          },
          {
            header: "Accessories",
            items: [
              { label: "All", count: "80" },
              { label: "Belts", count: "101" },
              { label: "Bag", count: "2" },
            ],
          },
          {
            header: "Shoes",
            items: [
              { label: "All", count: "2" },
              { label: "Trainers", count: "22" },
              { label: "Sandals", count: "55" },
            ],
          },
        ],
      };
    },
    template: `<SfAccordion 
        :open="open" 
        :multiple="multiple"
        :show-chevron="showChevron"
        :transition="transition">
      <SfAccordionItem 
        v-for="accordion in accordions" 
        :key="accordion.header" 
        :header="accordion.header"
      >
        <SfList>
          <SfListItem
            v-for="item in accordion.items"
            :key="item.label"
            >
            <SfMenuItem 
              :label="item.label" 
              :count="item.count"
            />
          </SfListItem>
        </SfList>
      </SfAccordionItem>
      </SfAccordion>`,
  }))
  .add("[slot] header with nested accordions", () => ({
    components: { SfAccordion, SfList, SfMenuItem },
    props: {
      open: {
        default: text("open", "Clothing", "Props"),
      },
      multiple: {
        default: boolean("multiple", false, "Props"),
      },
      showChevron: {
        default: boolean("showChevron", false, "Props"),
      },
      transition: {
        default: text("transition", "sf-expand", "Props"),
      },
    },
    data() {
      return {
        accordions: [
          {
            header: "Clothing",
            items: [
              { label: "All", count: "280", items: ["Short", "Tall"] },
              { label: "Skirts", count: "11", items: ["Short", "Tall"] },
              { label: "Dresses", count: "32", items: ["Short", "Tall"] },
            ],
          },
          {
            header: "Accessories",
            items: [
              { label: "All", count: "80", items: ["Short", "Tall"] },
              { label: "Belts", count: "101", items: ["Short", "Tall"] },
              { label: "Bag", count: "2", items: ["Short", "Tall"] },
            ],
          },
          {
            header: "Shoes",
            items: [
              { label: "All", count: "2", items: ["Short", "Tall"] },
              { label: "Trainers", count: "22", items: ["Short", "Tall"] },
              { label: "Sandals", count: "55", items: ["Short", "Tall"] },
            ],
          },
        ],
      };
    },
    template: `<SfAccordion
        :open="open"
        :multiple="multiple"
        :show-chevron="showChevron"
        :transition="transition"
        :style="{maxWidth: '186px', padding: '1rem'}">
      <SfAccordionItem
        v-for="accordion in accordions"
        :key="accordion.header"
        :header="accordion.header"
        :has-dynamic-height-content="true">
        <template #header="{header, isOpen, accordionClick, showChevron}">
          <div @click="accordionClick" :style="{cursor: 'pointer'}">{{ header }}</div>
        </template>
        <SfAccordion show-chevron open-first>
          <SfAccordionItem v-for="item in accordion.items" :key="item.label" :header="item.label">
            <div v-for="item in item.items">{{ item }}</div>
          </SfAccordionItem>
        </SfAccordion/>
      </SfAccordionItem>
    </SfAccordion>`,
  }));
