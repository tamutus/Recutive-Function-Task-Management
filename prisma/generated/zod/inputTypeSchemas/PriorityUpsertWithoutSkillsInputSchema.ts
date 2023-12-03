import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityUpdateWithoutSkillsInputSchema } from './PriorityUpdateWithoutSkillsInputSchema';
import { PriorityUncheckedUpdateWithoutSkillsInputSchema } from './PriorityUncheckedUpdateWithoutSkillsInputSchema';
import { PriorityCreateWithoutSkillsInputSchema } from './PriorityCreateWithoutSkillsInputSchema';
import { PriorityUncheckedCreateWithoutSkillsInputSchema } from './PriorityUncheckedCreateWithoutSkillsInputSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PriorityUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.PriorityUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => PriorityUpdateWithoutSkillsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => PriorityCreateWithoutSkillsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => PriorityWhereInputSchema).optional()
}).strict();

export default PriorityUpsertWithoutSkillsInputSchema;
