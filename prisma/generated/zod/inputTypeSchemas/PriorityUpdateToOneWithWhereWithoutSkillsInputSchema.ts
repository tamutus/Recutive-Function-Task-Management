import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';
import { PriorityUpdateWithoutSkillsInputSchema } from './PriorityUpdateWithoutSkillsInputSchema';
import { PriorityUncheckedUpdateWithoutSkillsInputSchema } from './PriorityUncheckedUpdateWithoutSkillsInputSchema';

export const PriorityUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.PriorityUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => PriorityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PriorityUpdateWithoutSkillsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export default PriorityUpdateToOneWithWhereWithoutSkillsInputSchema;
