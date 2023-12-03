import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityCreateWithoutSkillPathsInputSchema } from './PriorityCreateWithoutSkillPathsInputSchema';
import { PriorityUncheckedCreateWithoutSkillPathsInputSchema } from './PriorityUncheckedCreateWithoutSkillPathsInputSchema';

export const PriorityCreateOrConnectWithoutSkillPathsInputSchema: z.ZodType<Prisma.PriorityCreateOrConnectWithoutSkillPathsInput> = z.object({
  where: z.lazy(() => PriorityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PriorityCreateWithoutSkillPathsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutSkillPathsInputSchema) ]),
}).strict();

export default PriorityCreateOrConnectWithoutSkillPathsInputSchema;
