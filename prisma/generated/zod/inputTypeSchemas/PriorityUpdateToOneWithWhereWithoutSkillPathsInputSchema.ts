import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';
import { PriorityUpdateWithoutSkillPathsInputSchema } from './PriorityUpdateWithoutSkillPathsInputSchema';
import { PriorityUncheckedUpdateWithoutSkillPathsInputSchema } from './PriorityUncheckedUpdateWithoutSkillPathsInputSchema';

export const PriorityUpdateToOneWithWhereWithoutSkillPathsInputSchema: z.ZodType<Prisma.PriorityUpdateToOneWithWhereWithoutSkillPathsInput> = z.object({
  where: z.lazy(() => PriorityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PriorityUpdateWithoutSkillPathsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutSkillPathsInputSchema) ]),
}).strict();

export default PriorityUpdateToOneWithWhereWithoutSkillPathsInputSchema;
