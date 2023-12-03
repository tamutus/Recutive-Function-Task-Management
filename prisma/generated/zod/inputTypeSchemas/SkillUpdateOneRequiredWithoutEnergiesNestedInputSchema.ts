import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutEnergiesInputSchema } from './SkillCreateWithoutEnergiesInputSchema';
import { SkillUncheckedCreateWithoutEnergiesInputSchema } from './SkillUncheckedCreateWithoutEnergiesInputSchema';
import { SkillCreateOrConnectWithoutEnergiesInputSchema } from './SkillCreateOrConnectWithoutEnergiesInputSchema';
import { SkillUpsertWithoutEnergiesInputSchema } from './SkillUpsertWithoutEnergiesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutEnergiesInputSchema } from './SkillUpdateToOneWithWhereWithoutEnergiesInputSchema';
import { SkillUpdateWithoutEnergiesInputSchema } from './SkillUpdateWithoutEnergiesInputSchema';
import { SkillUncheckedUpdateWithoutEnergiesInputSchema } from './SkillUncheckedUpdateWithoutEnergiesInputSchema';

export const SkillUpdateOneRequiredWithoutEnergiesNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutEnergiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutEnergiesInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutEnergiesInputSchema),z.lazy(() => SkillUpdateWithoutEnergiesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutEnergiesInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutEnergiesNestedInputSchema;
