import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsPersonIdEnergyIdCompoundUniqueInputSchema } from './EnergiesToPersonsPersonIdEnergyIdCompoundUniqueInputSchema';
import { EnergiesToPersonsWhereInputSchema } from './EnergiesToPersonsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyMeasurementListRelationFilterSchema } from './EnergyMeasurementListRelationFilterSchema';

export const EnergiesToPersonsWhereUniqueInputSchema: z.ZodType<Prisma.EnergiesToPersonsWhereUniqueInput> = z.object({
  personId_energyId: z.lazy(() => EnergiesToPersonsPersonIdEnergyIdCompoundUniqueInputSchema)
})
.and(z.object({
  personId_energyId: z.lazy(() => EnergiesToPersonsPersonIdEnergyIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EnergiesToPersonsWhereInputSchema),z.lazy(() => EnergiesToPersonsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToPersonsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToPersonsWhereInputSchema),z.lazy(() => EnergiesToPersonsWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
  measurements: z.lazy(() => EnergyMeasurementListRelationFilterSchema).optional()
}).strict());

export default EnergiesToPersonsWhereUniqueInputSchema;
