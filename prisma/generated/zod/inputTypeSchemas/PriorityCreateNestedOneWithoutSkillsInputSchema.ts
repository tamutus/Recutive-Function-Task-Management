import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutSkillsInputSchema } from './PriorityCreateWithoutSkillsInputSchema';
import { PriorityUncheckedCreateWithoutSkillsInputSchema } from './PriorityUncheckedCreateWithoutSkillsInputSchema';
import { PriorityCreateOrConnectWithoutSkillsInputSchema } from './PriorityCreateOrConnectWithoutSkillsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';

export const PriorityCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.PriorityCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutSkillsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional()
}).strict();

export default PriorityCreateNestedOneWithoutSkillsInputSchema;
