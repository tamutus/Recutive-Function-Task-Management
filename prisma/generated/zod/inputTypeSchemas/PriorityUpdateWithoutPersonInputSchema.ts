import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrioritiesToTasksUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToTasksUpdateManyWithoutPriorityNestedInputSchema';
import { PrioritiesToProjectsUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToProjectsUpdateManyWithoutPriorityNestedInputSchema';
import { PrioritiesToSkillsUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToSkillsUpdateManyWithoutPriorityNestedInputSchema';
import { PrioritiesToSkillPathsUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToSkillPathsUpdateManyWithoutPriorityNestedInputSchema';
import { PrioritiesToTagsUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToTagsUpdateManyWithoutPriorityNestedInputSchema';
import { PrioritiesToPrivateTagsUpdateManyWithoutPriorityNestedInputSchema } from './PrioritiesToPrivateTagsUpdateManyWithoutPriorityNestedInputSchema';

export const PriorityUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PriorityUpdateWithoutPersonInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tasks: z.lazy(() => PrioritiesToTasksUpdateManyWithoutPriorityNestedInputSchema).optional(),
  projects: z.lazy(() => PrioritiesToProjectsUpdateManyWithoutPriorityNestedInputSchema).optional(),
  skills: z.lazy(() => PrioritiesToSkillsUpdateManyWithoutPriorityNestedInputSchema).optional(),
  skillPaths: z.lazy(() => PrioritiesToSkillPathsUpdateManyWithoutPriorityNestedInputSchema).optional(),
  tags: z.lazy(() => PrioritiesToTagsUpdateManyWithoutPriorityNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrioritiesToPrivateTagsUpdateManyWithoutPriorityNestedInputSchema).optional()
}).strict();

export default PriorityUpdateWithoutPersonInputSchema;
