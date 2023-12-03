import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsUpdateWithoutPersonInputSchema } from './EnergiesToPersonsUpdateWithoutPersonInputSchema';
import { EnergiesToPersonsUncheckedUpdateWithoutPersonInputSchema } from './EnergiesToPersonsUncheckedUpdateWithoutPersonInputSchema';

export const EnergiesToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToPersonsUpdateWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default EnergiesToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema;
