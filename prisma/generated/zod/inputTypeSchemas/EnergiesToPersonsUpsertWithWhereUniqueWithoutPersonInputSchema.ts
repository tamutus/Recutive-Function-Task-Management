import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsUpdateWithoutPersonInputSchema } from './EnergiesToPersonsUpdateWithoutPersonInputSchema';
import { EnergiesToPersonsUncheckedUpdateWithoutPersonInputSchema } from './EnergiesToPersonsUncheckedUpdateWithoutPersonInputSchema';
import { EnergiesToPersonsCreateWithoutPersonInputSchema } from './EnergiesToPersonsCreateWithoutPersonInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema';

export const EnergiesToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToPersonsUpdateWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default EnergiesToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema;
