import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrioritiesToTasksUncheckedUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToTasksUncheckedUpdateManyWithoutPriorityNestedInputSchema';
import { PrioritiesToProjectsUncheckedUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToProjectsUncheckedUpdateManyWithoutPriorityNestedInputSchema';
import { PrioritiesToSkillPathsUncheckedUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToSkillPathsUncheckedUpdateManyWithoutPriorityNestedInputSchema';
import { PrioritiesToTagsUncheckedUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToTagsUncheckedUpdateManyWithoutPriorityNestedInputSchema';
import { PrioritiesToPrivateTagsUncheckedUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToPrivateTagsUncheckedUpdateManyWithoutPriorityNestedInputSchema';

export const PriorityUncheckedUpdateWithoutSkillsInputSchema: z.ZodType<Prisma.PriorityUncheckedUpdateWithoutSkillsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tasks: z.lazy(() => PrioritiesToTasksUncheckedUpdateManyWithoutPriorityNestedInputSchema).optional(),
  projects: z.lazy(() => PrioritiesToProjectsUncheckedUpdateManyWithoutPriorityNestedInputSchema).optional(),
  skillPaths: z.lazy(() => PrioritiesToSkillPathsUncheckedUpdateManyWithoutPriorityNestedInputSchema).optional(),
  tags: z.lazy(() => PrioritiesToTagsUncheckedUpdateManyWithoutPriorityNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrioritiesToPrivateTagsUncheckedUpdateManyWithoutPriorityNestedInputSchema).optional()
}).strict();

export default PriorityUncheckedUpdateWithoutSkillsInputSchema;
