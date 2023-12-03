import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutPrioritiesInputSchema } from './PersonCreateNestedOneWithoutPrioritiesInputSchema';
import { PrioritiesToTasksCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToTasksCreateNestedManyWithoutPriorityInputSchema';
import { PrioritiesToProjectsCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToProjectsCreateNestedManyWithoutPriorityInputSchema';
import { PrioritiesToSkillsCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToSkillsCreateNestedManyWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToSkillPathsCreateNestedManyWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsCreateNestedManyWithoutPriorityInputSchema';

export const PriorityCreateWithoutTagsInputSchema: z.ZodType<Prisma.PriorityCreateWithoutTagsInput> = z.object({
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutPrioritiesInputSchema),
  tasks: z.lazy(() => PrioritiesToTasksCreateNestedManyWithoutPriorityInputSchema).optional(),
  projects: z.lazy(() => PrioritiesToProjectsCreateNestedManyWithoutPriorityInputSchema).optional(),
  skills: z.lazy(() => PrioritiesToSkillsCreateNestedManyWithoutPriorityInputSchema).optional(),
  skillPaths: z.lazy(() => PrioritiesToSkillPathsCreateNestedManyWithoutPriorityInputSchema).optional(),
  privateTags: z.lazy(() => PrioritiesToPrivateTagsCreateNestedManyWithoutPriorityInputSchema).optional()
}).strict();

export default PriorityCreateWithoutTagsInputSchema;