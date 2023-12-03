import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';
import { PrivateEnergiesToSkillsUpdateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUpdateWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema';

export const PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export default PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema;
