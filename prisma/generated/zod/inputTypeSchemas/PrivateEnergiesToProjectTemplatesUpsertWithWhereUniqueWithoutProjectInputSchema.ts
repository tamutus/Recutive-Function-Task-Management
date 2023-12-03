import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';

export const PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema;
