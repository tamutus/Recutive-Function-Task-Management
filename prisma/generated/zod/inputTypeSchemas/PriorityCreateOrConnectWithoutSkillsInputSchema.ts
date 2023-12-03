import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityCreateWithoutSkillsInputSchema } from './PriorityCreateWithoutSkillsInputSchema';
import { PriorityUncheckedCreateWithoutSkillsInputSchema } from './PriorityUncheckedCreateWithoutSkillsInputSchema';

export const PriorityCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.PriorityCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => PriorityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PriorityCreateWithoutSkillsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export default PriorityCreateOrConnectWithoutSkillsInputSchema;
