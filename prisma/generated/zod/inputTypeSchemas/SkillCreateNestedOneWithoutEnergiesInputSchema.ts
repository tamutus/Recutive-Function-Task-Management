import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutEnergiesInputSchema } from './SkillCreateWithoutEnergiesInputSchema';
import { SkillUncheckedCreateWithoutEnergiesInputSchema } from './SkillUncheckedCreateWithoutEnergiesInputSchema';
import { SkillCreateOrConnectWithoutEnergiesInputSchema } from './SkillCreateOrConnectWithoutEnergiesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutEnergiesInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutEnergiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutEnergiesInputSchema;
