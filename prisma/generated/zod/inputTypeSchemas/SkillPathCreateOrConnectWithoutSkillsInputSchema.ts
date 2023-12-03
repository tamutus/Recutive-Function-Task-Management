import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';
import { SkillPathCreateWithoutSkillsInputSchema } from './SkillPathCreateWithoutSkillsInputSchema';
import { SkillPathUncheckedCreateWithoutSkillsInputSchema } from './SkillPathUncheckedCreateWithoutSkillsInputSchema';

export const SkillPathCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.SkillPathCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => SkillPathWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillPathCreateWithoutSkillsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export default SkillPathCreateOrConnectWithoutSkillsInputSchema;
