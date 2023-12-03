import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutEnergiesInputSchema } from './SkillCreateWithoutEnergiesInputSchema';
import { SkillUncheckedCreateWithoutEnergiesInputSchema } from './SkillUncheckedCreateWithoutEnergiesInputSchema';

export const SkillCreateOrConnectWithoutEnergiesInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutEnergiesInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutEnergiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutEnergiesInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutEnergiesInputSchema;
