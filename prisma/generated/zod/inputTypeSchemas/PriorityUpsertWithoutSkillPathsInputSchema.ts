import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityUpdateWithoutSkillPathsInputSchema } from './PriorityUpdateWithoutSkillPathsInputSchema';
import { PriorityUncheckedUpdateWithoutSkillPathsInputSchema } from './PriorityUncheckedUpdateWithoutSkillPathsInputSchema';
import { PriorityCreateWithoutSkillPathsInputSchema } from './PriorityCreateWithoutSkillPathsInputSchema';
import { PriorityUncheckedCreateWithoutSkillPathsInputSchema } from './PriorityUncheckedCreateWithoutSkillPathsInputSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PriorityUpsertWithoutSkillPathsInputSchema: z.ZodType<Prisma.PriorityUpsertWithoutSkillPathsInput> = z.object({
  update: z.union([ z.lazy(() => PriorityUpdateWithoutSkillPathsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutSkillPathsInputSchema) ]),
  create: z.union([ z.lazy(() => PriorityCreateWithoutSkillPathsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutSkillPathsInputSchema) ]),
  where: z.lazy(() => PriorityWhereInputSchema).optional()
}).strict();

export default PriorityUpsertWithoutSkillPathsInputSchema;
