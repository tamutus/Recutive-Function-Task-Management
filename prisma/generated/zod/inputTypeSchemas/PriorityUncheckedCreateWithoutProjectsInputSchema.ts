import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksUncheckedCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToTasksUncheckedCreateNestedManyWithoutPriorityInputSchema';
import { PrioritiesToSkillsUncheckedCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToSkillsUncheckedCreateNestedManyWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutPriorityInputSchema';
import { PrioritiesToTagsUncheckedCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToTagsUncheckedCreateNestedManyWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutPriorityInputSchema';

export const PriorityUncheckedCreateWithoutProjectsInputSchema: z.ZodType<Prisma.PriorityUncheckedCreateWithoutProjectsInput> = z.object({
  id: z.number().int().optional(),
  personId: z.number().int(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  tasks: z.lazy(() => PrioritiesToTasksUncheckedCreateNestedManyWithoutPriorityInputSchema).optional(),
  skills: z.lazy(() => PrioritiesToSkillsUncheckedCreateNestedManyWithoutPriorityInputSchema).optional(),
  skillPaths: z.lazy(() => PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutPriorityInputSchema).optional(),
  tags: z.lazy(() => PrioritiesToTagsUncheckedCreateNestedManyWithoutPriorityInputSchema).optional(),
  privateTags: z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutPriorityInputSchema).optional()
}).strict();

export default PriorityUncheckedCreateWithoutProjectsInputSchema;
