import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';
import { PrivateEnergiesToSkillsUpdateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUpdateWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsCreateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsCreateWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema';

export const PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema;
