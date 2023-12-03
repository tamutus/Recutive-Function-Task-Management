import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutPrioritiesInputSchema } from './SkillCreateWithoutPrioritiesInputSchema';
import { SkillUncheckedCreateWithoutPrioritiesInputSchema } from './SkillUncheckedCreateWithoutPrioritiesInputSchema';

export const SkillCreateOrConnectWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutPrioritiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrioritiesInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutPrioritiesInputSchema;
